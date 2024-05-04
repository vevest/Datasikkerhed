// -----------------hamburger menu-----------------------

window.onload = function (){

    const menu_btn = document.querySelector('.hamburger');
    const mobil_menu = document.querySelector('.mobil-nav');
  
    menu_btn.addEventListener('click', function () {
  
    menu_btn.classList.toggle('is-active');
    mobil_menu.classList.toggle('is-active');
  
  
  });
  
  }