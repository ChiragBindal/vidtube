console.log('clone of youtube')

let menu = document.querySelector(".menu");
let sideNav = document.querySelector(".sideNav");
let container = document.querySelector('.container');

menu.addEventListener('click' , function(){
    sideNav.classList.toggle('smallSideNav');
    container.classList.toggle('expand');
})

