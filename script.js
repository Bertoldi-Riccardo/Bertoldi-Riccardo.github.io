// Function to toggle between English and Italian
document.getElementById('flag-en').addEventListener('click', function() {
    toggleLanguage('en');
});

document.getElementById('flag-it').addEventListener('click', function() {
    toggleLanguage('it');
});

document.getElementById("explore-button").addEventListener("click", function () {
    document.getElementById("map").scrollIntoView({ behavior: "smooth" });
});
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
