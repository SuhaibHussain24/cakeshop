// Document Ready Function
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Gallery Filter
    initGalleryFilter();
    
    // Initialize Testimonial Filter
    initTestimonialFilter();
    
    // Initialize Contact Form
    initContactForm();
    
    // Initialize Video Background
    initVideoBackground();
});

// Gallery Filter Function
function initGalleryFilter() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    // Add animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Testimonial Filter Function
function initTestimonialFilter() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const testimonialItems = document.querySelectorAll('.testimonial-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            testimonialItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    // Add animation
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Contact Form Function
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;
            const newsletter = document.getElementById('newsletter').checked;
            
            // Here you would typically send the form data to a server
            // For this example, we'll just show a success message
            
            // Show success message
            formSuccess.classList.remove('d-none');
            
            // Reset form
            contactForm.reset();
            
            // Hide success message after 5 seconds
            setTimeout(() => {
                formSuccess.classList.add('d-none');
            }, 5000);
        });
    }
}

// Video Background Function
function initVideoBackground() {
    const video = document.getElementById('background-video');
    
    if (video) {
        // Set video playback rate
        video.playbackRate = 0.8;
        
        // Ensure video plays on mobile devices
        video.addEventListener('canplay', function() {
            video.play();
        });
    }
}

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 76,
                behavior: 'smooth'
            });
        }
    });
});

// Add animation on scroll
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.feature-card, .team-member, .value-card, .testimonial-item');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
};

// Set initial state for animated elements
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.feature-card, .team-member, .value-card, .testimonial-item');
    
    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Trigger animation on load
    setTimeout(animateOnScroll, 100);
});

// Add scroll event listener for animations
window.addEventListener('scroll', animateOnScroll);