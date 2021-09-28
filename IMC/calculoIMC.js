const calcular = document.getElementById('calcular');

var nome = "";
var altura = ""; 
var peso = "";
 
function resultadoIMC(){
    nome = document.getElementById("nome").value

    altura = document.getElementById("altura").value

    peso = document.getElementById("peso").value

    const valorImc = (peso / (altura * altura)).toFixed(2);

    document.getElementById("resultado").innerHTML = valorImc;

}

calcular.addEventListener('click', resultadoIMC);

