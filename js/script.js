/*O DOM --> É um objeto. que contem atributos e metodos. */

const modalOverlay = window.document.querySelector('.modal-overlay')
const cards = window.document.querySelectorAll('.card')



for (const card of cards) {
    card.addEventListener('click',function () {
        modalOverlay.classList.add('active') /*o metodo 'classList é um metodo para adicionar classes*/
    })
}


// FecharModa
window.document.querySelector('.close-modal').addEventListener('click',function () {
    modalOverlay.classList.remove('active') // remove a classe active
})