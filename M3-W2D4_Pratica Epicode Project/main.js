window.addEventListener('DOMContentLoaded', function() {
    
    // Section Toggle Collapse Function
    const collapseButtons = document.querySelectorAll('.collapse-btn');
    for (let i = 0; i < collapseButtons.length; i++) {
        collapseButtons[i].addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            toggleSection(targetId, this);
        });
    }

    //  Clear Cards Function
    const clearBtn = document.getElementById('btn-clear-cards');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            removeAllCards();
        });
    }

    // Count Trips Function
    const countBtn = document.getElementById('btn-count-trips');
    if (countBtn) {
        countBtn.addEventListener('click', function() {
            countTrips();
        });
    }

    // Contact Modale Function
    const contactBtn = document.getElementById('btn-contact-us');
    if (contactBtn) {
        contactBtn.addEventListener('click', function() {
            openContactModal();
        });
    }
});

// Smooth Transition Function for Collapse Sections
function toggleSection(sectionId, buttonElement) {
    const sectionElement = document.getElementById(sectionId);
    
    if (sectionElement) {
        if (sectionElement.classList.contains('is-collapsed')) {
            sectionElement.classList.remove('is-collapsed');
            buttonElement.classList.remove('rotated');
        } else {
            sectionElement.classList.add('is-collapsed');
            buttonElement.classList.add('rotated');
        }
    }
}

// Function to extract structural component safe counts for trip cards and images
function countTrips() {
    const cards = document.querySelectorAll('.card');
    const lastMinuteImages = document.querySelectorAll('.last-minute-img');
    const offerDayImage = document.querySelectorAll('#offer-day-content img');
    
    const totalTrips = cards.length + lastMinuteImages.length + offerDayImage.length;
    
    alert('There are currently ' + totalTrips + ' amazing trips available on this page!');
}

// function to initialize core Bootstrap overlay contexts natively
function openContactModal() {
    const modalElement = document.getElementById('contactModal');
    if (modalElement) {
        const bootstrapModal = new bootstrap.Modal(modalElement);
        bootstrapModal.show();
    }
}

// Function managing smooth transition
function removeAllCards() {
    const allCards = document.querySelectorAll('.card');
    
    for (let i = 0; i < allCards.length; i++) {
        const currentCard = allCards[i];
        
        // Execute premium fade exit sequence prior to garbage collection
        currentCard.style.transition = 'opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)';
        currentCard.style.opacity = '0';
        currentCard.style.transform = 'scale(0.95)';
        
        // Isolate context processing scopes
        (function(element) {
            setTimeout(function() {
                element.remove();
            }, 400);
        })(currentCard);
    }
}