const body = document.querySelector('body')
const trocaCor = document.getElementById('trocaCor')

trocaCor.onclick = function(){
    trocaCor.classList.toggle('active')
    body.classList.toggle('active')
}