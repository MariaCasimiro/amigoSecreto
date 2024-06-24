let listaDeAmigos = [];
let listaOriginal = [];
let listaAmigos = document.getElementById("lista-amigos");
let listaSorteio = document.getElementById("lista-sorteio");

function adicionar(){    
    let nomeAmigo = document.getElementById("nome-amigo");
    if (nomeAmigo.value == '') {
        alert("Porfavor, digite o nome de um amigo.");
        return;
    } 
    
    if (listaDeAmigos.includes(` ${nomeAmigo.value}`)) {
        alert("Nome já adicionado!");
        return;
    }
    
    else {
        listaDeAmigos.push(` ${nomeAmigo.value}`);
        listaAmigos.textContent = listaDeAmigos;

        listaOriginal.push(` ${nomeAmigo.value}`);
        nomeAmigo.value = '';
    }
}

function sortear(){
    if (listaDeAmigos.length <= 2){
        alert("Porfavor, inclua 3 ou mais amigos.");
    } else {
        listaSorteio.innerHTML = '';
        embaralhar(listaDeAmigos);
        for (let i = 0; i < listaOriginal.length;) {
            if (listaOriginal[i] == listaDeAmigos[i]){
            embaralhar(listaDeAmigos);
            } else {
            listaSorteio.innerHTML = listaSorteio.innerHTML + listaOriginal[i] + "=>" + listaDeAmigos[i] + "<br>";
            i++
            }
        }
    }
}

function embaralhar(lista) {
    for (let indice = lista.length; indice; indice--) {
        const indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar(){
    listaDeAmigos = [];
    listaOriginal = [];
    listaAmigos.textContent = "";
    listaSorteio.textContent = "";
}
