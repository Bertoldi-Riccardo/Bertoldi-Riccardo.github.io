document.getElementById('lang-toggle').addEventListener('click', function() {
    // Get all elements with data-lang="en" and data-lang="it"
    const langElementsEn = document.querySelectorAll('[data-lang="en"]');
    const langElementsIt = document.querySelectorAll('[data-lang="it"]');
    
    // Toggle display of English and Italian elements
    langElementsEn.forEach(element => element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none');
    langElementsIt.forEach(element => element.style.display = (element.style.display === 'none' || element.style.display === '') ? 'block' : 'none');
    
    // Change button text based on the current language
    if (langElementsEn[0].style.display === 'none') {
        document.getElementById('lang-toggle').textContent = 'Switch to English';
    } else {
        document.getElementById('lang-toggle').textContent = 'Switch to Italiano';
    }
});
