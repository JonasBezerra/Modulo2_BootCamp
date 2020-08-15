/*O DOM --> É um objeto. que contem atributos e metodos. */

const modalOverlay = window.document.querySelector('.modal-overlay')
const cards = window.document.querySelectorAll('.card')
/*
console.log(cards.length)
console.log(cards);
console.log(cards[0])*/


for (const card of cards) {
    card.addEventListener('click', function () {
        const videoId = card.getAttribute('id')
        modalOverlay.classList.add('active') /*o metodo 'classList é um metodo para adicionar classes*/
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`

    })
}


// FecharModalOverlay
window.document.querySelector('.close-modal').addEventListener('click', function () {
    modalOverlay.classList.remove('active') // remove a classe active
    modalOverlay.querySelector('iframe').src = "" // ao clicar tira a url e para o video
})

