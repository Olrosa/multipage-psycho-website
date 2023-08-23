window.addEventListener('DOMContentLoaded', function() { 
  //menu 
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.header__menu');
    const closeBtn = document.querySelector('.header__close');
    if (burger && menu) {
        burger.addEventListener('click', () => {
            menu.classList.add('header__menu_active');
        });
        closeBtn.addEventListener('click', () => {
            menu.classList.remove('header__menu_active');
        });
        const menuLinks = menu.childNodes;
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                menu.classList.remove('header__menu_active');
            });
        });
        // if (menu.classList.contains('header__menu_active')) {
        //     document.addEventListener('click', (e) => { 
        //         if (!menu.contains(e.target)) {
        //             menu.classList.remove('header__menu_active');
        //         }
        //     });
        // }
    }
});