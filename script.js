document.getElementById('lang-toggle').addEventListener('click', function() {
    // Toggle between English and Italian
    const langElementsEn = document.querySelectorAll('[data-lang="en"]');
    const langElementsIt = document.querySelectorAll('[data-lang="it"]');
    
    langElementsEn.forEach(element => element.style.display = element.style.display === 'none' ? 'block' : 'none');
    langElementsIt.forEach(element => element.style.display = element.style.display === 'none' ? 'block' : 'none');

    // Change the button text based on the current language
    if (langElementsEn[0].style.display === 'none') {
        document.getElementById('lang-toggle').textContent = 'Switch to English';
    } else {
        document.getElementById('lang-toggle').textContent = 'Switch to Italiano';
    }
});
