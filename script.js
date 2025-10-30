document.addEventListener('DOMContentLoaded', function() {
    // Add animation class to elements when they come into view
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-fadeInUp');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
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