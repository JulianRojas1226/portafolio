let items =document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let miniaturas =document.querySelectorAll('.miniatura .item');

let countItem = items.length;
let itemActive = 0;

next.onclick = function(){
    itemActive = itemActive + 1;
    if (itemActive >= countItem){
        itemActive = 0;
    }
    showslider();
}

prev.onclick = function(){
    itemActive = itemActive - 1;
    if(itemActive < 0){
        itemActive = countItem - 1;
    }
    showslider();
}
let refreshInterval = setInterval(() => {
    next.click();
}, 5000)

function showslider(){

    let itemActiveold = document.querySelector('.slider .list .item.active');
    let miniaturaactiveold = document.querySelector('.miniatura .item.active');
    itemActiveold.classList.remove('active');
    miniaturaactiveold.classList.remove('active');
    
    items[itemActive].classList.add('active');
    miniaturas[itemActive].classList.add('active');

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)

}
miniaturas.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showslider();
    })
})