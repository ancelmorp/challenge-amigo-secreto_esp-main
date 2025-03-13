// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value;
  if(nombre == ""){
    alert("Por favor, inserte un nombre.");
  }
    else{
        amigos.push(nombre);
        document.getElementById('amigo').value = "";
        document.getElementById('amigo').focus();
        console.log(amigos);
        actualizarLista();
    }
}

function actualizarLista() {
    var ul = document.getElementById("listaAmigos");
    ul.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(amigos[i]));
        ul.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("No hay suficientes amigos para sortear.");
    } else {
        let amigoSorteado = amigos[(Math.floor(Math.random() * amigos.length))];
        document.getElementById("resultado").innerHTML = amigoSorteado;
    }
}