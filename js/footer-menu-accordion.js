const FOOTER_BLOCK = document.querySelectorAll(".footer__menu--block");

FOOTER_BLOCK.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("clicked");
    })
});