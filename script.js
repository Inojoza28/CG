// Simulando a digitação do subtitulo usando JavaScript
var subtitle = document.getElementById('subtitle');
var text = 'Subtítulo';

function typeEffect(element, text) {
    var i = 0;
    var speed = 50; // Velocidade da digitação em milissegundos

}
// Chamando a função para adicionar o efeito de digitação ao subtitulo
typeEffect(subtitle, text);

// Seleciona o elemento com a classe .subtext
var subtextElement = document.querySelector('.subtext');

// Adiciona um ouvinte de eventos para a conclusão da animação
subtextElement.addEventListener('animationend', function() {
    // Adiciona a classe 'hide-scrollbar' após a animação
    subtextElement.classList.add('hide-scrollbar');
});
