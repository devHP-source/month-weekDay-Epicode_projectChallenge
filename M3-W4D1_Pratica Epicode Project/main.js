document.addEventListener('DOMContentLoaded', () => {

    /* Navbar Scroll Effect & Mobile Auto-Close */
    const header = document.getElementById('main-header');
    const navbarCollapse = document.getElementById('navbarNav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('header-scrolled');
        } else {
            header.classList.remove('header-scrolled');
        }

        if (navbarCollapse.classList.contains('show')) { // Auto-close the mobile navbar menu onScroll
            const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    });

    /* Dynamic PAGE Navigation  */
    const navLinks = document.querySelectorAll('.main-nav-links .nav-link');
    const sections = document.querySelectorAll('.page-section');
    const brandLogo = document.querySelector('.navbar-brand');

    function navigateTo(linkElement) {
        navLinks.forEach(link => link.classList.remove('active')); // Remove 'active' class from all links
        
        if (linkElement) {
            linkElement.classList.add('active'); // Add 'active' class onClick
            
            const targetId = linkElement.dataset.target; // Determine the target section

            sections.forEach(section => { // Hide all sections
                section.classList.add('d-none');
                section.classList.remove('active-section');
            });

            const targetSection = document.getElementById(targetId); // Show the target section
            if (targetSection) {
                targetSection.classList.remove('d-none');
                targetSection.classList.add('active-section');
            }
        
            const dynamicCategoryTitle = document.getElementById('dynamic-category-title'); // Update the H2 text dynamically
            const linkText = linkElement.textContent;
            if (dynamicCategoryTitle) {
                dynamicCategoryTitle.textContent = linkText === 'Home' ? 'Featured Content' : linkText;
            }
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' }); // transition page
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link);

            if (navbarCollapse.classList.contains('show')) {  // close the mobile menu after clicking a link
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) bsCollapse.hide();
            }
        });
    });


    if(brandLogo) { // onClick to logo (returns to home)
        brandLogo.addEventListener('click', (e) => {
            e.preventDefault();
            const homeLink = Array.from(navLinks).find(link => link.dataset.target === 'home');
            navigateTo(homeLink);
        });
    }

    /* Scroll Animation for Rows */
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Triggers when 15% of the row is visible
    };

    const rowObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeRows = document.querySelectorAll('.fade-row');
    fadeRows.forEach(row => {
        rowObserver.observe(row);
    });

    const rowContainers = document.querySelectorAll('.row-container');

    rowContainers.forEach(container => {
        const slider = container.querySelector('.slider-row');
        const prevBtn = container.querySelector('.handle-prev');
        const nextBtn = container.querySelector('.handle-next');

        if (!slider || !prevBtn || !nextBtn) return;

        const handleButtons = () => { // Function to show/hide the 'prev' button onScroll position
            if (slider.scrollLeft <= 0) {
                prevBtn.style.display = 'none';
            } else {
                prevBtn.style.display = 'flex';
            }
        };


        prevBtn.addEventListener('click', () => { // Scroll Left (Previous)
            const scrollAmount = slider.clientWidth * 0.9; // Scroll by 90% of the visible container width to keep context of the previous item
            slider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        });


        nextBtn.addEventListener('click', () => { // Scroll Right (Next)
            const scrollAmount = slider.clientWidth * 0.9;
            slider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        });

        slider.addEventListener('scroll', handleButtons); // trackpad/touch scrolling to natively update button visibility
        handleButtons(); // Run once onLoad to hide PREV buttons initial
    });
});