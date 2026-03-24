// Este script simples faz os cards "aparecerem" com animação ao rolar a página

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const target = document.querySelectorAll('[data-anime]');
const animationClass = 'animate';

function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
        if((windowTop) > element.offsetTop) {
            element.classList.add(animationClass);
        } else {
            element.classList.remove(animationClass); // Opcional: remove ao subir
        }
    });
}

// Ativa a verificação inicial e ao rolar
if(target.length) {
    window.addEventListener('scroll', debounce(function() {
        animeScroll();
    }, 200));
}

// Ativa no carregamento para os primeiros cards
window.onload = animeScroll;