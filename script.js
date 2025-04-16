document.addEventListener("DOMContentLoaded", function() {
    // Language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    const flagEn = document.getElementById('flag-en');
    const flagIt = document.getElementById('flag-it');
    
    let currentLang = 'en';
    
    langToggle.addEventListener('click', function() {
        if (currentLang === 'en') {
            currentLang = 'it';
            flagEn.style.display = 'none';
            flagIt.style.display = 'block';
        } else {
            currentLang = 'en';
            flagEn.style.display = 'block';
            flagIt.style.display = 'none';
        }
        
        document.querySelectorAll('[data-lang]').forEach(element => {
            if (element.getAttribute('data-lang') === currentLang) {
                element.style.display = '';
            } else {
                element.style.display = 'none';
            }
        });
    });

    // Enhanced smooth scrolling with offset for fixed header
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = targetPosition - 20; // Adjust for any fixed header
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
});


