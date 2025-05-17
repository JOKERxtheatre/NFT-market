menu_btn = document.querySelector('#menu-toggle');
menu = document.querySelector('.nav-list-div');
menu_btn.addEventListener('click', function() {
    menu.classList.toggle('active');
    menu_btn.classList.toggle('active');
})