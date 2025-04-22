document.addEventListener("DOMContentLoaded", function() {
    // Language toggle functionality
    const langToggle = document.getElementById('lang-toggle');
    const flagEn = document.getElementById('flag-en');
    const flagIt = document.getElementById('flag-it');
    let currentLang = 'en';
    
    langToggle.addEventListener('click', function() {
        currentLang = currentLang === 'en' ? 'it' : 'en';
        flagEn.style.display = currentLang === 'en' ? '' : 'none';
        flagIt.style.display = currentLang === 'it' ? '' : 'none';
        document.querySelectorAll('[data-lang]').forEach(el => {
            el.style.display = el.getAttribute('data-lang') === currentLang ? '' : 'none';
        });
    });
    
    // Smooth scrolling for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - 20;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });

    // DETAIL TOGGLE
    const detailSection = document.getElementById('detail');
    const allDetails = detailSection.querySelectorAll('.detail-content');

    function showDetail(detailId) {
        // Nascondi tutte le detail-content
        allDetails.forEach(div => div.style.display = 'none');
        // Mostra la sezione detail e il blocco giusto nella lingua corrente
        detailSection.style.display = '';
        const target = document.getElementById(detailId);
        target.style.display = '';
        target.querySelectorAll('[data-lang]').forEach(el => {
            el.style.display = el.getAttribute('data-lang') === currentLang ? '' : 'none';
        });
        // Scorri fino a detail
        detailSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Collega il click sui titoli <h3> delle card
    [
      { cardId: 'story-card-en', detailId: 'detail-story' },
      { cardId: 'story-card-it', detailId: 'detail-story' },
      { cardId: 'power-card-en', detailId: 'detail-power' },
      { cardId: 'power-card-it', detailId: 'detail-power' },
      // eventualmente aggiungi archive-card per il terzo:
      // { cardId: 'archive-card-en', detailId: 'detail-archive' },
      // { cardId: 'archive-card-it', detailId: 'detail-archive' },
    ].forEach(mapping => {
        const card = document.getElementById(mapping.cardId);
        if (card) {
            const title = card.querySelector('h3');
            title.style.cursor = 'pointer';
            title.addEventListener('click', () => showDetail(mapping.detailId));
        }
    });
});
