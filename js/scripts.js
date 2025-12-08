const dataAtual = new Date();
const direitos = document.querySelector("#direitos");
direitos.innerHTML = `Todos os direitos resevados &copy; Corallus - ${dataAtual.getFullYear()}`;
const navItems = document.querySelectorAll(".item-nav");
navItems.forEach(item => {
    item.addEventListener('click', ()=>{
        console.log(item.innerHTML);
        navItems.forEach(i=>i.classList.remove('active'));
        item.classList.add('active');

    }) 
});