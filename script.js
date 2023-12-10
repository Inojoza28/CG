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


// animação de inicio
document.addEventListener('DOMContentLoaded', function () {
    // Adiciona a classe 'active' para acionar a animação
    document.querySelector('.fade-in').classList.add('active');
});


// roleta de palavras


// Mantém o controle da div atual
var current = 1;

// Altura da div roles
var height = $('.roles').height();

// Número de filhos da div roles
var numberDivs = $('.roles').children().length;

// A primeira div aninhada na div roles
var first = $('.roles div:nth-child(1)');

// Função de intervalo para a animação
setInterval(function() {
    // Calcula a nova margem superior com base na div atual
    var number = current * -height;

    // Aplica a nova margem superior à primeira div
    first.css('margin-top', number + 'px');

    // Se atingir a última div, volta para a primeira div
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else {
        // Move para a próxima div
        current++;
    }
}, 2000);  // Intervalo para a animação (2 segundos)


