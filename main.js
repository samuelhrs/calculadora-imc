const peso = document.getElementById('peso');
const altura = document.getElementById('altura');
const valorFinal = document.getElementById('valorFinal');


function calcular_imc(){
   let resultado = peso.value / (altura.value * altura.value);

   const imc = resultado.toFixed(1);

}

