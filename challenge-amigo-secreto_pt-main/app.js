let amigos = []; 
let sorteio = []; 
let index = 0; 

let inputAmigo = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");
let botaoSortear = document.querySelector(".button-draw");
let botaoReiniciar = document.querySelector (".button-reiniciar1");

function adicionarAmigo() {
   let nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo && !amigos.includes(nomeAmigo)) {
        console.log (`Nome inserido: ${nomeAmigo}.`);
        amigos.push(nomeAmigo);
        atualizarLista(listaAmigos, amigos);
    } else {
        alert("Nome inválido ou já adicionado.");
        console.log("Botão clicado");
    }

    inputAmigo.value = "";
}

function atualizarLista(elemento, lista) {
    elemento.innerHTML = lista.map(item => `<li>${item}</li>`).join("");
}

function embaralhar(lista) {
    return lista.sort(() => Math.random() - 0.5);
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Adicione pelo menos dois nomes.");
        return;
    }

if (index == 0 || index >= sorteio.length) {
    sorteio = embaralhar([...amigos]); 
    index = 0;
}

atualizarLista(resultado, [`O nome sorteado é: ${sorteio[index]}`]);
index++;
console.log(`O nome sorteado foi ${sorteio[index]}. `);

if (index >= sorteio.length) {
    botaoSortear.disabled = true;
    setTimeout(() => alert("Todos os nomes foram sorteados."), 500);
}
}

function reiniciarJogo() {
    amigos = [];
    sorteio = [];
    index = 0;
    atualizarLista(listaAmigos, []);
    atualizarLista(resultado, []);
    botaoSortear.disabled = false;
    document.getElementById("amigo").value = "";
    console.log ("Botão reiniciar clicado.");
}

