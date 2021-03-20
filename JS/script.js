const nav = document.querySelector(".link-items");
const btn = document.querySelector(".menu-btn");

btn.addEventListener('click', () => {
    nav.classList.toggle('show');
})