const ratings = document.querySelectorAll('.rating')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
const ratingsContainer = document.querySelector('.ratings-container')
let selectedRating = 'Happy'

ratingsContainer.addEventListener('click', (e) => {
    if(e.target.parentNode.classList.contains('rating')){
        removeActive()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSibling.innerHTML
    }
})

sendBtn.addEventListener('click', (e) =>{
    panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We will use your feedback to improve our customer experience</p>
    `
})
function removeActive(){
    ratings.forEach(rating => {
        rating.classList.remove('active')
    })
}