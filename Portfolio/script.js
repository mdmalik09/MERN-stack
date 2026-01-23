// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    const navDots = document.querySelectorAll('.nav-dot');
    const sections = document.querySelectorAll('.section');
    
    navDots.forEach(dot => {
        dot.addEventListener('click', function() {
            const targetSection = this.getAttribute('data-section');
            
            // Remove active class from all dots and sections
            navDots.forEach(d => d.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked dot and corresponding section
            this.classList.add('active');
            document.getElementById(targetSection).classList.add('active');
            
            // Animate skill bars if skills section is activated
            if (targetSection === 'skills') {
                animateSkillBars();
            }
        });
    });
    
    // Skill bars animation
    function animateSkillBars() {
        const skillFills = document.querySelectorAll('.skill-fill');
        
        skillFills.forEach(fill => {
            const targetWidth = fill.getAttribute('data-width');
            // Reset width first
            fill.style.width = '0%';
            // Animate after a small delay
            setTimeout(() => {
                fill.style.width = targetWidth + '%';
            }, 100);
        });
    }
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        const activeSection = document.querySelector('.section.active');
        const activeDot = document.querySelector('.nav-dot.active');
        let nextSection;
        
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            nextSection = activeDot.nextElementSibling;
            if (nextSection) {
                nextSection.click();
            }
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            nextSection = activeDot.previousElementSibling;
            if (nextSection) {
                nextSection.click();
            }
        }
    });
    
    // Mouse wheel navigation (optional)
    let isScrolling = false;
    
    document.addEventListener('wheel', function(e) {
        if (isScrolling) return;
        
        isScrolling = true;
        
        const activeDot = document.querySelector('.nav-dot.active');
        let nextSection;
        
        if (e.deltaY > 0) {
            // Scroll down
            nextSection = activeDot.nextElementSibling;
        } else {
            // Scroll up
            nextSection = activeDot.previousElementSibling;
        }
        
        if (nextSection) {
            nextSection.click();
        }
        
        // Reset scrolling flag after a delay
        setTimeout(() => {
            isScrolling = false;
        }, 800);
    });
    
    // Touch/swipe navigation for mobile
    let touchStartY = 0;
    let touchEndY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.changedTouches[0].screenY;
    });
    
    document.addEventListener('touchend', function(e) {
        touchEndY = e.changedTouches[0].screenY;
        handleSwipe();
    });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const activeDot = document.querySelector('.nav-dot.active');
        
        if (touchStartY - touchEndY > swipeThreshold) {
            // Swipe up - go to next section
            const nextSection = activeDot.nextElementSibling;
            if (nextSection) {
                nextSection.click();
            }
        } else if (touchEndY - touchStartY > swipeThreshold) {
            // Swipe down - go to previous section
            const prevSection = activeDot.previousElementSibling;
            if (prevSection) {
                prevSection.click();
            }
        }
    }
    
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Project cards hover effect enhancement
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderTopColor = '#ff8c42';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderTopColor = '#ff6b35';
        });
    });
    
    // Add particle effect to home section (optional)
    function createParticle() {
        const homeSection = document.getElementById('home');
        const particle = document.createElement('div');
        
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 5 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = 'rgba(255, 107, 53, 0.3)';
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.pointerEvents = 'none';
        particle.style.animation = 'float 3s ease-in-out infinite';
        
        homeSection.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 3000);
    }
    
    // Add CSS animation for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
            50% { transform: translateY(-20px) translateX(10px); opacity: 1; }
        }
    `;
    document.head.appendChild(style);
    
    // Create particles periodically on home section
    setInterval(() => {
        const activeSection = document.querySelector('.section.active');
        if (activeSection && activeSection.id === 'home') {
            createParticle();
        }
    }, 500);
    
    // Console message
    console.log('Portfolio Website Loaded Successfully! 🚀');
    console.log('Navigation: Click dots, use arrow keys, or scroll with mouse wheel');
    
});