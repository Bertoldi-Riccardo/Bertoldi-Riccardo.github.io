document.addEventListener("DOMContentLoaded", function () {
    // ========== LANGUAGE TOGGLE ========== //
    const langToggle = document.getElementById("lang-toggle");
    const flagEn = document.getElementById("flag-en");
    const flagIt = document.getElementById("flag-it");
    let currentLang = "en"; // Default language

    function toggleLanguage() {
        // Switch between English and Italian
        currentLang = currentLang === "en" ? "it" : "en";
        
        // Toggle flag visibility
        flagEn.style.display = currentLang === "en" ? "" : "none";
        flagIt.style.display = currentLang === "it" ? "" : "none";
        
        // Show/hide language-specific content
        document.querySelectorAll("[data-lang]").forEach(el => {
            el.style.display = el.getAttribute("data-lang") === currentLang ? "" : "none";
        });
    }

    // ========== SMOOTH SCROLLING ========== //
    function setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute("href"));
                if (target) {
                    window.scrollTo({
                        top: target.getBoundingClientRect().top + window.pageYOffset - 20,
                        behavior: "smooth"
                    });
                }
            });
        });
    }

    // ========== SECTION MANAGEMENT ========== //
    function showSection(sectionId) {
        // Hide all content sections except the cards section
        document.querySelectorAll('.content-section').forEach(section => {
            section.style.display = section.id === 'explore' ? 'block' : 'none';
        });
        
        // Show requested section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.style.display = 'block';
            window.scrollTo({
                top: targetSection.offsetTop - 20,
                behavior: 'smooth'
            });
        }
    }

    // ========== CARD CLICK HANDLERS ========== //
    function setupCardInteractions() {
        const cardBindings = [
            { cardId: 'power-card-en', sectionId: 'detail-power' },
            { cardId: 'power-card-it', sectionId: 'detail-power' },
            { cardId: 'story-card-en', sectionId: 'detail-story' },
            { cardId: 'story-card-it', sectionId: 'detail-story' },
            { cardId: 'archive-card-en', sectionId: 'detail-archive' },
            { cardId: 'archive-card-it', sectionId: 'detail-archive' }
        ];

        cardBindings.forEach(({ cardId, sectionId }) => {
            const card = document.getElementById(cardId);
            if (card) {
                card.style.cursor = "pointer";
                card.addEventListener('click', () => showSection(sectionId));
            }
        });
    }

    // ========== BACK BUTTONS ========== //
    function setupBackButtons() {
        document.querySelectorAll('.back-to-cards button').forEach(button => {
            button.addEventListener('click', () => showSection('explore'));
        });
    }

    // ========== INITIALIZE EVERYTHING ========== //
    langToggle.addEventListener("click", toggleLanguage);
    setupSmoothScrolling();
    setupCardInteractions();
    setupBackButtons();
});
