let copy = function (e) {
    text = e.toElement.innerText;
    input = document.querySelector('.hide');
    input.setAttribute('value', text);
    input.select()
    document.execCommand("Copy")
}

window.addEventListener('scroll', (value) => {

})