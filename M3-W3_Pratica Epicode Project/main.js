
document.addEventListener('DOMContentLoaded', () => {
  initializeBookmarkToggle();
  initializeResponsiveDeckEngine();
  initializePopoutEngine();
  initializeProfileDropdown();
});

/* Toggles structural bookmark states using event delegation */
function initializeBookmarkToggle() {
  document.addEventListener('click', function (e) {
    const button = e.target.closest('.bookmark-btn');
    if (!button) return;
    
    e.preventDefault();

    const currentCard = button.closest('.course-card');
    if (!currentCard) return;
    
    const courseTitleEl = currentCard.querySelector('h3');
    const courseTitle = courseTitleEl ? courseTitleEl.textContent.trim() : '';
    const isNowActive = !button.classList.contains('bookmark-active');

    const updateButtonVisuals = (btn, active) => {
      const icon = btn.querySelector('ion-icon');
      if (!icon) return;

      if (active) {
        btn.classList.add('bookmark-active');
        icon.setAttribute('name', 'bookmark');
      } else {
        btn.classList.remove('bookmark-active');
        icon.setAttribute('name', 'bookmark-outline');
      }
    };

    const masterCards = document.querySelectorAll('.carousel-cards-pool .col');
    masterCards.forEach(masterCol => {
      const masterTitleEl = masterCol.querySelector('h3');
      const masterTitle = masterTitleEl ? masterTitleEl.textContent.trim() : '';
      if (masterTitle === courseTitle && courseTitle !== '') {
        const masterBtn = masterCol.querySelector('.bookmark-btn');
        if (masterBtn) updateButtonVisuals(masterBtn, isNowActive);
      }
    });

    const allVisibleCards = document.querySelectorAll('.course-card');
    allVisibleCards.forEach(visibleCard => {
      const visibleTitleEl = visibleCard.querySelector('h3');
      const visibleTitle = visibleTitleEl ? visibleTitleEl.textContent.trim() : '';
      if (visibleTitle === courseTitle && courseTitle !== '') {
        const visibleBtn = visibleCard.querySelector('.bookmark-btn');
        if (visibleBtn) updateButtonVisuals(visibleBtn, isNowActive);
      }
    });
  });

  document.addEventListener('mouseover', function (e) {
    const button = e.target.closest('.bookmark-btn');
    if (!button || button.classList.contains('bookmark-active')) return;
    
    const icon = button.querySelector('ion-icon');
    if (icon) icon.setAttribute('name', 'bookmark');
  });

  document.addEventListener('mouseout', function (e) {
    const button = e.target.closest('.bookmark-btn');
    if (!button || button.classList.contains('bookmark-active')) return;
    
    const icon = button.querySelector('ion-icon');
    if (icon) icon.setAttribute('name', 'bookmark-outline');
  });
}

/* Dynamic Item Slider (Carousel) Partitioning */
function initializeResponsiveDeckEngine() {
  const deckSections = document.querySelectorAll('.dynamic-deck-section');

  deckSections.forEach(section => {
    const referencePool = section.querySelector('.carousel-cards-pool');
    const renderTarget = section.querySelector('.dynamic-carousel-target');
    
    if (!referencePool || !renderTarget) return;

    const totalCards = Array.from(referencePool.children);
    let currentActiveSlots = 0;

    function calculateTargetBreakpoints() {
      const currentViewportWidth = window.innerWidth;
      if (currentViewportWidth >= 992) {
        return { slots: 4, bootstrapRowClass: 'row-cols-4' };
      } else if (currentViewportWidth >= 768) {
        return { slots: 3, bootstrapRowClass: 'row-cols-3' };
      } else {
        return { slots: 2, bootstrapRowClass: 'row-cols-2' };
      }
    }

    function renderResponsiveCarousel() {
      const configuration = calculateTargetBreakpoints();
      
      if (currentActiveSlots === configuration.slots) return;
      currentActiveSlots = configuration.slots;

      renderTarget.innerHTML = '';

      for (let i = 0; i < totalCards.length; i += configuration.slots) {
        const cardSegmentChunk = totalCards.slice(i, i + configuration.slots);

        const carouselSlidePanel = document.createElement('div');
        carouselSlidePanel.className = `carousel-item ${i === 0 ? 'active' : ''}`;

        const structureRow = document.createElement('div');
        structureRow.className = `row ${configuration.bootstrapRowClass} g-4`;

        cardSegmentChunk.forEach(cardNode => {
          const clone = cardNode.cloneNode(true);
          const bookmarkBtn = clone.querySelector('.bookmark-btn');
          if (bookmarkBtn) {
            const isActive = bookmarkBtn.classList.contains('bookmark-active');
            bookmarkBtn.innerHTML = `<ion-icon name="${isActive ? 'bookmark' : 'bookmark-outline'}" class="fs-5"></ion-icon>`;
          }
          structureRow.appendChild(clone);
        });

        carouselSlidePanel.appendChild(structureRow);
        renderTarget.appendChild(carouselSlidePanel);
      }
    }

    renderResponsiveCarousel();

    let layoutDebounceTimer;
    window.addEventListener('resize', () => {
      clearTimeout(layoutDebounceTimer);
      layoutDebounceTimer = setTimeout(renderResponsiveCarousel, 100);
    });
  });
}

/* Pop-Out Card Function (Netflix/Prime Video vibes) */
function initializePopoutEngine() {
  let activeClone = null;
  let isCarouselMoving = false;

  document.addEventListener('slide.bs.carousel', () => {
    isCarouselMoving = true;
    if (activeClone) {
      activeClone.remove();
      activeClone = null;
    }
  });

  document.addEventListener('slid.bs.carousel', () => {
    isCarouselMoving = false;
  });

  window.addEventListener('scroll', () => {
    if (activeClone) {
      activeClone.remove();
      activeClone = null;
    }
  }, { passive: true });

  document.addEventListener('mouseover', (e) => {
    if (isCarouselMoving) return;

    const card = e.target.closest('.course-card');
    if (!card || card.classList.contains('popout-clone')) return;

    if (activeClone) {
        activeClone.remove();
        activeClone = null;
    }

    const rect = card.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    activeClone = card.cloneNode(true);
    activeClone.classList.add('popout-clone');
    activeClone.classList.remove('h-100'); 

    const cloneBtn = activeClone.querySelector('.bookmark-btn');
    if (cloneBtn) {
        const isActive = cloneBtn.classList.contains('bookmark-active');
        cloneBtn.innerHTML = `<ion-icon name="${isActive ? 'bookmark' : 'bookmark-outline'}" class="fs-5"></ion-icon>`;
    }

    activeClone.style.position = 'fixed';
    activeClone.style.top = `${rect.top}px`;
    activeClone.style.left = `${rect.left}px`;
    activeClone.style.width = `${rect.width}px`;
    
    activeClone.style.minHeight = `${rect.height}px`;
    activeClone.style.maxHeight = '460px';
    activeClone.style.height = 'auto'; 

    let originY = 'center';
    if (rect.bottom > viewportHeight - 120) {
        originY = 'bottom';
    } else if (rect.top < 120) {
        originY = 'top';
    }

    activeClone.style.transition = 'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.3s ease';
    activeClone.style.transformOrigin = `center ${originY}`; 

    document.body.appendChild(activeClone);
    activeClone.getBoundingClientRect();

    activeClone.classList.add('is-active'); 
    activeClone.style.transform = 'scale(1.15)';

    const extraInfo = activeClone.querySelector('.card-extra-info');
    if (extraInfo) extraInfo.classList.add('expanded');

    activeClone.addEventListener('mouseleave', () => {
      if (!activeClone) return;
      
      activeClone.style.transform = 'scale(1)';
      activeClone.classList.remove('is-active'); 
      if (extraInfo) extraInfo.classList.remove('expanded');
      
      const currentClone = activeClone;
      activeClone = null;

      setTimeout(() => {
        if (currentClone && currentClone.parentNode) {
            currentClone.remove();
        }
      }, 300);
    });
  });
}

/* EXERCISE EXTRA: PROFILE DROPDOWN LOGIC
 * toggle function state and outside-click closure for the mini-tab
 */
function initializeProfileDropdown() {
  document.addEventListener('click', function (e) {
    const toggleBtn = e.target.closest('.profile-toggle-btn');
    
    
    if (!toggleBtn) { // If click is NOT on the toggle button, close open menus if clicked outside
      const openDropdowns = document.querySelectorAll('.custom-profile-dropdown.is-active');
      openDropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
          dropdown.classList.remove('is-active');
        }
      });
      return;
    }

    e.preventDefault();
    e.stopPropagation();

    const wrapper = toggleBtn.closest('.dropdown-wrapper');
    if (!wrapper) return;

    const dropdownMenu = wrapper.querySelector('.custom-profile-dropdown');
    if (dropdownMenu) { // Close other open dropdowns first to prevent overlap
      document.querySelectorAll('.custom-profile-dropdown.is-active').forEach(menu => {
        if (menu !== dropdownMenu) menu.classList.remove('is-active');
      });
      
      dropdownMenu.classList.toggle('is-active'); // Toggle the target menu
    }
  });

  document.addEventListener('keydown', function (e) { // Close the EXTRA.PNG exercise onClick of "ESC" keyboard
    if (e.key === 'Escape') {
      document.querySelectorAll('.custom-profile-dropdown.is-active').forEach(menu => {
        menu.classList.remove('is-active');
      });
    }
  });
}