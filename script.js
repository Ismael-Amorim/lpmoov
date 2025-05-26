
function trocarImagem(tipo) {
    const imagem = document.getElementById('imagemTecido');
    const descricao = document.getElementById('textoDescricao');
    const botoes = document.querySelectorAll('.botao');

    // Remove classe ativo de todos
    botoes.forEach(btn => btn.classList.remove('ativo'));

    // Adiciona classe ativo no clicado
    if (tipo === 'sublimacao') {
        imagem.src = 'https://lp.moovsports.com.br/wp-content/uploads/2025/05/2-768x309.png'; // caminho da imagem
        descricao.innerText = 'Tecido de poliéster com elastano, com personalização ilimitada em tamanho de arte e cores.';
        botoes[0].classList.add('ativo');
    } else if (tipo === 'silk') {
        imagem.src = 'https://lp.moovsports.com.br/wp-content/uploads/2025/05/1-768x309.png'; // caminho da imagem
        descricao.innerText = 'Tecido 100% poliamida com proteção UV e antidor, estampadas com tinta própria para poliamida e alta durabilidade.';
        botoes[1].classList.add('ativo');
    }
}


let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('ativo', i === index);
        dots[i].classList.toggle('ativo', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Muda automaticamente a cada 5 segundos
setInterval(nextSlide, 5000);

// Clique manual nos dots
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

