
  // Header scroll effect
        window.addEventListener('scroll', function() {
            const header = document.getElementById('header');
            if (window.scrollY > 100) {
                header.classList.add('header-scrolled');
            } else {
                header.classList.remove('header-scrolled');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Scroll animation for elements
        function checkScroll() {
            const elements = document.querySelectorAll('.benefit-card, .gallery-item');
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * 0.85;

            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                
                if (elementTop < triggerPoint) {
                    element.classList.add('visible');
                }
            });
        }

        // Initial check
        checkScroll();

        // Check on scroll
        window.addEventListener('scroll', checkScroll);

        // Form submission
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Here you would typically send the form data to a server
                // For demo purposes, we'll just show an alert
                alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
                this.reset();
                
                // In a real implementation, you would use fetch or XMLHttpRequest
                // to send the form data to your server or FormSubmit service
            });
        }