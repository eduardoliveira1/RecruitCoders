document.addEventListener('DOMContentLoaded', function () {
    var hamburguerMenu = document.getElementById('hamburguer-menu');
    var navHamburguer = document.getElementById('nav-hamburguer');

    function toggleHamburguerMenu() {
        hamburguerMenu.style.display = (hamburguerMenu.style.display === 'block') ? 'none' : 'block';
    }

    navHamburguer.addEventListener('click', function (event) {
        event.preventDefault();
        toggleHamburguerMenu();
    });

    var navButtons = document.querySelectorAll('#hamburguer-menu .nav-button');
    navButtons.forEach(function (button) {
        button.addEventListener('click', toggleHamburguerMenu);
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 900) {
            hamburguerMenu.style.display = 'none';
        }
    });
});