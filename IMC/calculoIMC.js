const calcular = document.getElementById('calcular');

function imc(){
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value; 
    const resultado = document.getElementById('resultado');

    if(nome !== '' && altura !== '' && peso !== ''){

        const valorImc = (peso / (altura * altura)).toFixed(2); 

        
        let classificacao = '';

        if (valorImc < 18.5){
            classificacao = 'Abaixo do peso';
        } else if (valorImc > 18.5 && valorImc < 25){
            classificacao = 'com peso ideal PARABÉNS! ';
        } else if (valorImc > 25 && valorImc < 30){
            classificacao = 'levemente acima do peso';
        } else if (valorImc > 30 && valorImc < 35){
            classificacao = 'obsedidade grau 1';
        } else if (valorImc > 35 && valorImc < 40){
            classificacao = 'obsesidade grau 2';
        } else{
            classificacao = 'obesidade grau 3'
        }
        
        resultado.textContent = `${nome} seu imc é ${valorImc} e você está ${classificacao}`

        
    } else{
        resultado.textContent = 'Preencha todos os capos!!! '
    
    }

}

calcular.addEventListener('click', imc);