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
    //slider
    const swiper = new Swiper('.slider', {
        slidesPerView: 1,
        navigation: {
            nextEl: '.slider__arrow_next',
            prevEl: '.slider__arrow_prev',
        },
        loop: true,
    });

    //modals
    const openModalButtons = document.querySelectorAll('.open-modal');
    const overlays = document.querySelectorAll('.overlay');
    const body = document.querySelector('body');
    // const overlay = document.querySelector('.overlay');

    function openModal(modalId) {
        if(overlays) {
            const modal = document.querySelector(`.modal[data-modal="${modalId}"]`);
            if(modal) {
                let overlay = modal.parentNode.parentNode;
                overlay.style.display = 'block';
                modal.style.display = 'block';
                body.classList.add('modal-active');
                currentModal = modal;
            }
        }
    }
    if(overlays) {
        const modalClose = document.querySelectorAll('.modal__close');
        openModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modalId = button.dataset.modal;
                openModal(modalId);
            });
        });
        overlays.forEach(overlay => {
            overlay.addEventListener('click', event => {
                if (event.target === overlay) {
                    overlay.style.display = 'none';
                    currentModal.style.display = 'none';
                    currentModal = null;
                    body.classList.remove('modal-active');
                }
            });
        });
        modalClose.forEach(close => {
            close.addEventListener('click', () => {
                const overlay = currentModal.parentNode.parentNode;
                overlay.style.display = 'none';
                currentModal.style.display = 'none';
                currentModal = null;
                body.classList.remove('modal-active');
            })
        });
    }

    //header bg
    let header = document.querySelector('#header');

    if(header) {
        window.addEventListener("scroll", function() {
            let scrollY = window.scrollY;
            if (scrollY > 0) {
                header.classList.add('header_active');
            } else {
                header.classList.remove('header_active');
            }
        });
    }
});