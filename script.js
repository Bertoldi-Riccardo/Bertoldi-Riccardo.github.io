document.addEventListener("DOMContentLoaded", function () {
    // Language Toggle
    document.getElementById('flag-en').addEventListener('click', function() {
        toggleLanguage('en');
    });

    document.getElementById('flag-it').addEventListener('click', function() {
        toggleLanguage('it');
    });

    function toggleLanguage(lang) {
        const langElementsEn = document.querySelectorAll('[data-lang="en"]');
        const langElementsIt = document.querySelectorAll('[data-lang="it"]');

        // Toggle visibility of elements based on selected language
        if (lang === 'en') {
            langElementsEn.forEach(element => element.style.display = 'block');
            langElementsIt.forEach(element => element.style.display = 'none');
            document.getElementById('flag-en').style.display = 'none'; // Hide GB flag
            document.getElementById('flag-it').style.display = 'block'; // Show IT flag
        } else {
            langElementsEn.forEach(element => element.style.display = 'none');
            langElementsIt.forEach(element => element.style.display = 'block');
            document.getElementById('flag-en').style.display = 'block'; // Show GB flag
            document.getElementById('flag-it').style.display = 'none'; // Hide IT flag
        }
    }
});


