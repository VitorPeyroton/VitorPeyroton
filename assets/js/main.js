// Language management
let currentLang = localStorage.getItem('language') || 'pt';

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
