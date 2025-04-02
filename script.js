document.addEventListener("DOMContentLoaded", function () {
    // Language Toggle
    document.getElementById('flag-en').addEventListener('click', function() {
        toggleLanguage('en');
    });

    document.getElementById('flag-it').addEventListener('click', function() {
        toggleLanguage('it');
    });

    // Smooth scroll for Explore Now button
    const exploreButton = document.getElementById("explore-button");
    if (exploreButton) {
        exploreButton.addEventListener("click", function () {
            document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
        });
    }

    // Smooth scroll for CTA buttons
    document.querySelectorAll('.cta-button').forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
        });
    });

    function toggleLanguage(lang) {
        const langElementsEn = document.querySelectorAll('[data-lang="en"]');
        const langElementsIt = document.querySelectorAll('[data-lang="it"]');

        if (lang === 'en') {
            langElementsEn.forEach(element => element.style.display = 'block');
            langElementsIt.forEach(element => element.style.display = 'none');
            document.getElementById('flag-en').style.display = 'none';
            document.getElementById('flag-it').style.display = 'block';
        } else {
            langElementsEn.forEach(element => element.style.display = 'none');
            langElementsIt.forEach(element => element.style.display = 'block');
            document.getElementById('flag-en').style.display = 'block';
            document.getElementById('flag-it').style.display = 'none';
        }
    }
});

