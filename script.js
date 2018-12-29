let copy = function (e) {
    text = e.toElement.innerText;
    console.log(text)
    input = document.querySelector('.hide');

    input.setAttribute('value', text);
    input.select()
    document.execCommand("Copy");

    setTimeout(( )=>{
        e.toElement.innerText = "Copied"
    },100);
    setTimeout(()=>{
        e.toElement.innerText = text
    },1000)
    
}

window.addEventListener('scroll', (value) => {

})