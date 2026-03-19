const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');
const nav = document.querySelector('#nav');
const nav_li = document.querySelectorAll('.nav-list li');
const body = document.querySelector('body');


abrir.addEventListener("click", ()=>{
    nav.classList.add("visible");
    console.log("hola")
    body.style.overflow = 'hidden'; // Bloquea el scroll
})

// Evento para cerrar al hacer clic en un ítem
nav_li.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('visible');
        body.style.overflow = 'auto';
    });
});
cerrar.addEventListener("click", ()=>{
    nav.classList.remove("visible");
    body.style.overflow = 'auto';
})