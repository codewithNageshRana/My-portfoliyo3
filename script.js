const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-bx');
    navbar.classList.toggle('active');
}