// ==========================================
// MODERN IT PORTFOLIO JAVASCRIPT
// ==========================================

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 Modern Portfolio loaded successfully!');
    
    // Initialize all functions
    initNavigation();
    initScrollEffects();
    initContactForm();
    initThemeToggle();
    initMobileMenu();
    initTypingEffect();
    initScrollAnimations();
    initProjectFilter();
    initParticleEffect();
});

// Navigation Functions
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                // Smooth scroll to section
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Update active nav link
                navLinks.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('nav-menu');
                const menuToggle = document.getElementById('menu-toggle');
                if (mobileMenu.classList.contains('active')) {
                    mobileMenu.classList.remove('active');
                    menuToggle.classList.remove('active');
                }
            }
        });
    });
}

// Header scroll effect
function initScrollEffects() {
    const header = document.getElementById('header');
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    window.addEventListener('scroll', function() {
        // Header background on scroll
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Active section highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

// Contact Form with enhanced validation
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            const btnText = submitBtn.querySelector('span');
            const loading = submitBtn.querySelector('.loading');
            
            // Show loading state
            btnText.textContent = 'Đang gửi...';
            loading.style.display = 'inline-block';
            submitBtn.disabled = true;
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name').trim();
            const email = formData.get('email').trim();
            const subject = formData.get('subject').trim();
            const message = formData.get('message').trim();
            
            // Enhanced validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (!name || name.length < 2) {
                showMessage('Vui lòng nhập tên hợp lệ (ít nhất 2 ký tự)!', 'error');
                resetSubmitButton(submitBtn, btnText, loading);
                return;
            }
            
            if (!email || !emailRegex.test(email)) {
                showMessage('Vui lòng nhập địa chỉ email hợp lệ!', 'error');
                resetSubmitButton(submitBtn, btnText, loading);
                return;
            }
            
            if (!message || message.length < 10) {
                showMessage('Tin nhắn phải có ít nhất 10 ký tự!', 'error');
                resetSubmitButton(submitBtn, btnText, loading);
                return;
            }
            
            // Simulate API call
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                
                // Success
                showMessage('🎉 Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi trong vòng 24h.', 'success');
                this.reset();
                
                // Analytics tracking (if needed)
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'contact_form_submit', {
                        event_category: 'engagement',
                        event_label: 'contact_form'
                    });
                }
                
            } catch (error) {
                showMessage('❌ Có lỗi xảy ra. Vui lòng thử lại sau!', 'error');
            } finally {
                resetSubmitButton(submitBtn, btnText, loading);
            }
        });
    }
}

function resetSubmitButton(btn, textEl, loading) {
    textEl.textContent = 'Gửi tin nhắn';
    loading.style.display = 'none';
    btn.disabled = false;
}

// Enhanced Theme Toggle
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const icon = themeToggle.querySelector('i');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-theme');
            
            // Update icon
            if (document.body.classList.contains('light-theme')) {
                icon.className = 'fas fa-sun';
            } else {
                icon.className = 'fas fa-moon';
            }
            
            // Save theme preference
            const isDark = !document.body.classList.contains('light-theme');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
            
            // Add transition effect
            this.style.transform = 'rotate(180deg)';
            setTimeout(() => {
                this.style.transform = 'rotate(0deg)';
            }, 300);
        });
        
        // Load saved theme
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-theme');
            icon.className = 'fas fa-sun';
        }
    }
}

// Mobile Menu
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!menuToggle.contains(e.target) && !navMenu.contains(e.target)) {
                menuToggle.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Typing Effect for Hero Section
function initTypingEffect() {
    const typingElement = document.querySelector('.typing-text');
    if (!typingElement) return;
    
    const phrases = [
        'sáng tạo và hiện đại',
        'tối ưu và hiệu quả',
        'đẹp mắt và thân thiện',
        'nhanh chóng và ổn định',
        'responsive và accessible'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            
            if (charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(typeEffect, 500);
                return;
            }
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            
            if (charIndex === currentPhrase.length) {
                isDeleting = true;
                setTimeout(typeEffect, 2000);
                return;
            }
        }
        
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
    
    typeEffect();
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all elements with animation classes
    const animateElements = document.querySelectorAll('.animate-fadeInUp, .animate-fadeInLeft, .animate-fadeInRight');
    animateElements.forEach(el => {
        observer.observe(el);
    });
}

// Project Filter
function initProjectFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.textContent.toLowerCase();
            
            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter projects
            filterProjects(filter === 'all' ? 'all' : this.getAttribute('onclick').match(/'(.+)'/)[1]);
        });
    });
}

// Enhanced Project Filter
function filterProjects(category) {
    const projects = document.querySelectorAll('.project-card');
    
    projects.forEach((project, index) => {
        const projectCategory = project.dataset.category;
        
        if (category === 'all' || projectCategory === category) {
            project.style.display = 'block';
            project.style.animation = `fadeInUp 0.6s ease ${index * 0.1}s forwards`;
        } else {
            project.style.display = 'none';
        }
    });
}

// Particle Effect (optional enhancement)
function initParticleEffect() {
    // Simple particle effect for hero section
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = '2px';
        particle.style.height = '2px';
        particle.style.background = 'var(--accent-color)';
        particle.style.borderRadius = '50%';
        particle.style.opacity = '0.5';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = '100%';
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '1';
        
        hero.appendChild(particle);
        
        // Animate particle
        let yPos = 100;
        const speed = Math.random() * 2 + 1;
        
        function animateParticle() {
            yPos -= speed;
            particle.style.top = yPos + '%';
            
            if (yPos < -10) {
                particle.remove();
            } else {
                requestAnimationFrame(animateParticle);
            }
        }
        
        animateParticle();
    }
    
    // Create particles periodically
    setInterval(createParticle, 2000);
}

// Utility Functions
function showMessage(message, type) {
    // Remove existing messages
    const existingMessages = document.querySelectorAll('.message');
    existingMessages.forEach(msg => msg.remove());
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    messageDiv.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
        ${message}
    `;
    
    document.body.appendChild(messageDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        messageDiv.style.opacity = '0';
        messageDiv.style.transform = 'translateX(100%)';
        setTimeout(() => messageDiv.remove(), 300);
    }, 5000);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll events
window.addEventListener('scroll', debounce(function() {
    // Any additional scroll-based animations can go here
}, 10));

// Add loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    console.log('✨ Portfolio fully loaded and ready!');
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('Portfolio Error:', e.error);
});

// Console easter egg for developers
console.log(`
%c
██████╗  █████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║  ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║  ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚█████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 

%cHey there, fellow developer! 👋
Interested in the code? Check out the source on GitHub!
Built with ❤️ and lots of ☕

`, 'color: #00d4ff; font-weight: bold;', 'color: #a0a0a0; font-size: 14px;');
