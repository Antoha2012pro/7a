document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.header');
    const burger = document.querySelector('.header__burger');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    burger.addEventListener('click', () => {
      header.classList.toggle('menu-open');
    });
  
    // За бажанням, закрити меню при кліку по пункту
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('menu-open');
      });
    });
  });
  