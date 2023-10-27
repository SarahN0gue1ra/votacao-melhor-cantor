
function inserir(valor) {
    var valor1 = document.getElementById("campo1").value;
    var valor2 = document.getElementById("campo2").value;

    if (valor1 == "") {
        document.getElementById("campo1").value = valor;
    } else if (valor2 == "") {
        document.getElementById("campo2").value = valor;
    }

    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var candidato = (valor1 * 10) + valor2;

    if(candidato == 10){
        document.getElementById("nome").innerText = "Nome: Ivete Sangalo"
        document.getElementById("genero").innerText = "Gênero musical: Axé"
        const enderecoImagem = './assets/Ivete-Sangalo.jpg';
        const minhaImg = document.getElementById('minha-img');
        minhaImg.setAttribute('src', enderecoImagem);
    }else if(candidato == 15){
        document.getElementById("nome").innerText = "Nome: Caetano Veloso"
        document.getElementById("genero").innerText = "Gênero musical: MPB"
        const enderecoImagem = './assets/Caetano_Veloso_(cropped).jpg';
        const minhaImg = document.getElementById('minha-img');
        minhaImg.setAttribute('src', enderecoImagem);
    }else if(candidato == 20){
        document.getElementById("nome").innerText = "Nome: Carlinhos Brown"
        document.getElementById("genero").innerText = "Gênero musical: Axé"
        const enderecoImagem = './assets/Carlinhos.jpg';
        const minhaImg = document.getElementById('minha-img');
        minhaImg.setAttribute('src', enderecoImagem);
    }else if(candidato == 25){
        document.getElementById("nome").innerText = "Nome: Daniela Mercury"
        document.getElementById("genero").innerText = "Gênero musical: Axé"
        const enderecoImagem = './assets/Daniela.jpg';
        const minhaImg = document.getElementById('minha-img');
        minhaImg.setAttribute('src', enderecoImagem);
    }else if(candidato == 30){
        document.getElementById("nome").innerText = "Nome: Gilberto Gil"
        document.getElementById("genero").innerText = "Gênero musical: MPB"
        const enderecoImagem = './assets/Gilberto.jpg';
        const minhaImg = document.getElementById('minha-img');
        minhaImg.setAttribute('src', enderecoImagem);
    }else{
        limpa();
    }
}

function limpa(){
    document.getElementById("nome").innerText = "Candidato não definido"
    document.getElementById("genero").innerText = "Candidato não definido"
    const enderecoImagem = './assets/Interrogação.jpg';
    const minhaImg = document.getElementById('minha-img');
    minhaImg.setAttribute('src', enderecoImagem);
}


function corrige() {
    document.getElementById("campo1").value = "";
    document.getElementById("campo2").value = "";
    limpa();
}

function votar() {
    var valor1 = parseInt(document.getElementById("campo1").value);
    var valor2 = parseInt(document.getElementById("campo2").value);
    var candidato = (valor1 * 10) + valor2;
    if (sessionStorage.getItem(candidato) !== null) {
        votos = parseInt(sessionStorage.getItem(candidato)) + 1;
        sessionStorage.setItem(candidato, votos);
    } else {
        sessionStorage.setItem(candidato, 1);
        
    }
    alert("Confirmado voto no candidato "+candidato)
    corrige();
}


function branco() {
    alert("Confirmado voto branco.")
}

function resultado() {
    document.getElementById("resultado").innerHTML=""
    for(i=0;i<100;i++){
        if (sessionStorage.getItem(i) !== null) {
            document.getElementById("resultado").innerHTML += "Cantidato "+i+" tem "+sessionStorage.getItem(i)+" votos<br/>" ;
        }
    }

}