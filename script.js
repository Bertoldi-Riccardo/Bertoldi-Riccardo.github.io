document.addEventListener("DOMContentLoaded", function () {
    const langToggle = document.getElementById("lang-toggle");
    const flagEn = document.getElementById("flag-en");
    const flagIt = document.getElementById("flag-it");

    let currentLang = "en";

    // Language toggle
    langToggle.addEventListener("click", function () {
        currentLang = currentLang === "en" ? "it" : "en";
        flagEn.style.display = currentLang === "en" ? "" : "none";
        flagIt.style.display = currentLang === "it" ? "" : "none";

        document.querySelectorAll("[data-lang]").forEach((el) => {
            el.style.display = el.getAttribute("data-lang") === currentLang ? "" : "none";
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const target = document.querySelector(targetId);
            if (target) {
                const yOffset = -20;
                const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y, behavior: "smooth" });
            }
        });
    });

    // Show detail function
    function showDetail(detailId) {
        const detailSection = document.getElementById("detail");
        const allDetails = detailSection.querySelectorAll(".detail-content");

        // Hide all detail blocks
        allDetails.forEach((div) => {
            div.style.display = "none";
        });

        // Show detail section
        detailSection.style.display = "block";

        // Show only correct language in the correct detail block
        const targetDetail = document.getElementById(detailId);
        targetDetail.style.display = "block";
        targetDetail.querySelectorAll("[data-lang]").forEach((el) => {
            el.style.display = el.getAttribute("data-lang") === currentLang ? "" : "none";
        });

        // Scroll to detail
        detailSection.scrollIntoView({ behavior: "smooth" });
    }

    // Attach listeners to h3 titles of the cards
    const bindings = [
        { id: "story-card-en", detail: "detail-story" },
        { id: "story-card-it", detail: "detail-story" },
        { id: "power-card-en", detail: "detail-power" },
        { id: "power-card-it", detail: "detail-power" },
        // Aggiungi qui se vuoi visual archive
    ];

    bindings.forEach(({ id, detail }) => {
        const card = document.getElementById(id);
        if (card) {
            const title = card.querySelector("h3");
            if (title) {
                title.style.cursor = "pointer";
                title.addEventListener("click", () => showDetail(detail));
            }
        }
    });
});
