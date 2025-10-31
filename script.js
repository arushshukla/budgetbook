
// Lightbox functions
function openLightbox(src) {
    const modal = document.getElementById('lightbox-modal');
    const image = document.getElementById('lightbox-image');
    image.src = src;
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    feather.replace();
}

function closeLightbox() {
    const modal = document.getElementById('lightbox-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}
document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabs = document.querySelectorAll('[href="#overview"], [href="#reviews"], [href="#about"]');
    const sections = document.querySelectorAll('#overview, #reviews, #about');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = tab.getAttribute('href').substring(1);
            
            // Update active tab
            tabs.forEach(t => {
                t.classList.remove('text-primary', 'border-primary');
                t.classList.add('text-gray-600');
            });
            tab.classList.add('text-primary', 'border-primary');
            tab.classList.remove('text-gray-600');
            
            // Show/hide sections
            sections.forEach(section => {
                if (section.id === target) {
                    section.classList.remove('hidden');
                    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                } else {
                    section.classList.add('hidden');
                }
            });
        });
    });

    // Close lightbox when clicking outside image
document.getElementById('lightbox-modal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });
    // Scroll animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('[data-animate]');
elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            if (elementPosition < screenPosition) {
                const animation = element.getAttribute('data-animate');
                element.classList.add(animation);
                
                // Add hover effects for interactive elements
                if (element.hasAttribute('data-hover')) {
                    element.addEventListener('mouseenter', () => {
                        element.classList.add(element.getAttribute('data-hover'));
                    });
                    element.addEventListener('mouseleave', () => {
                        element.classList.remove(element.getAttribute('data-hover'));
                    });
                }
            }
});
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
    
    // Add hover effect to gallery items
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.querySelector('img').style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseleave', () => {
            item.querySelector('img').style.transform = 'scale(1)';
        });
    });
});
