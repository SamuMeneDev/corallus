const dataAtual = new Date();
const direitos = document.querySelector("#direitos");

direitos.innerHTML = `Todos os direitos resevados &copy; Corallus - ${dataAtual.getFullYear()}`;
