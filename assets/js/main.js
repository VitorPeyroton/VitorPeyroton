// Language management
let currentLang = localStorage.getItem('language') || 'pt';

// Header scroll functionality
let lastScrollTop = 0;
const header = document.querySelector('header');
let isHeaderVisible = true;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    // Se desceu mais de 50px, esconde o header
    if (currentScroll > lastScrollTop && currentScroll > 50) {
        if (isHeaderVisible) {
            header.style.transform = 'translateY(-100%)';
            header.style.transition = 'transform 0.3s ease';
            isHeaderVisible = false;
        }
    } else {
        // Se subiu, mostra o header
        if (!isHeaderVisible) {
            header.style.transform = 'translateY(0)';
            header.style.transition = 'transform 0.3s ease';
            isHeaderVisible = true;
        }
    }
    
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, currentLang:', currentLang);
    
    // Set initial toggle state
    const langInput = document.getElementById('lang-input');
    if (langInput) {
        langInput.checked = currentLang === 'en';
        langInput.addEventListener('change', toggleLanguage);
    }
    
    // Apply translations
    applyTranslations(currentLang);
});

function toggleLanguage() {
    console.log('Toggle clicked, old lang:', currentLang);
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    console.log('New lang:', currentLang);
    localStorage.setItem('language', currentLang);
    applyTranslations(currentLang);
}
