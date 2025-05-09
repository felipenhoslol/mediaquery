document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.getElementById("menu-button");
    const menu = document.getElementById("menu");
    const menuLinks = document.querySelectorAll(".header-right a"); // Seleciona todos os links do menu

    // Alterna o menu hambúrguer
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active"); // Remove a classe "active" para fechar o menu
        });
    });
});