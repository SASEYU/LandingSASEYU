
// 1) Referencia global al player YouTube
let player;

// 2) Esta función la invoca YouTube cuando la API está lista
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtubePlayer', {
    playerVars: {
      autoplay: 1,
      loop: 1,
      playlist: 'KVvtP1o_Emw',
      controls: 0
    }
  });
}

// 3) Función que agrupa todo el manejo de scroll
function handleScroll() {
  // Header
  const header = document.getElementById('header');
  if (window.scrollY > 100) header.classList.add('header-scrolled');
  else header.classList.remove('header-scrolled');

  // Pausar vídeo
  if (player && player.pauseVideo) player.pauseVideo();

  // Animaciones
  document.querySelectorAll('.benefit-card, .gallery-item').forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) {
      el.classList.add('visible');
    }
  });
}

// 4) Smooth scrolling
function setupAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' });
      }
    });
  });
}

// 5) Formulario
function setupForm() {
  const contactForm = document.getElementById('contactForm');
  if (!contactForm) return;
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    this.reset();
  });
}

// 6) Inicialización al cargar DOM
document.addEventListener('DOMContentLoaded', () => {
  handleScroll();                  // animaciones iniciales
  window.addEventListener('scroll', handleScroll);
  setupAnchors();
  setupForm();
});
////////////////////////////////////////
//////////////////////////////////////////

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

