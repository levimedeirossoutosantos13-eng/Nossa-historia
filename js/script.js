// --- LÓGICA DA MÚSICA (TOCANDO DO INÍCIO DO ARQUIVO CORTADO) ---
const iniciarSom = () => {
    const audio = document.getElementById('musica');
    if (audio) {
        audio.muted = false; // Garante que o som não esteja mudo
        
        // Tentativa de play imediato após interação
        audio.play().then(() => {
            console.log("Música iniciada com sucesso!");
            // Remove os ouvintes para a música não reiniciar a cada clique
            document.removeEventListener('click', iniciarSom);
            document.removeEventListener('touchstart', iniciarSom);
            document.removeEventListener('scroll', iniciarSom);
        }).catch(e => {
            console.log("Aguardando interação para soltar o som: ", e);
        });
    }
};

// Ativa o som no primeiro clique, toque ou rolagem
document.addEventListener('click', iniciarSom);
document.addEventListener('touchstart', iniciarSom);
document.addEventListener('scroll', iniciarSom);

// --- ANIMAÇÃO DAS FOTOS ---
const target = document.querySelectorAll('[data-anime]');
function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(el => {
        if (windowTop > el.offsetTop) {
            el.classList.add('animate');
        }
    });
}

window.addEventListener('scroll', animeScroll);
window.onload = animeScroll;