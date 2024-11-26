let next = document.getElementById('nextc');
let prev = document.getElementById('prevc');
let morebtn = document.getElementById('.seeMore')
let carrusel = document.querySelector('.carrusel')
let listhtml = document.querySelector('.carrusel .list')

next.onclick = function(){
   showSlider('next'); 
}
prev.onclick = function(){
 showSlider('prev');
}
const showSlider = (type) =>{
    // carrusel.classList.remove('prev', 'next')
    let items = document.querySelectorAll('.carrusel .list .item')
    if (type === 'next'){
        listhtml.appendChild(items[0])
        carrusel.classList.add('next')
    }else{
        let positionLast = items.length -1;
        listhtml.prepend(items[positionLast])
        carrusel.classList.add('prev')
    }
}