const peso = document.getElementById('peso');
const altura = document.getElementById('altura');



function calcular_imc(){
   let resultado = peso.value / (altura.value * altura.value);

   const imc = resultado.toFixed(1);

   const exibirIMC = document.getElementById('resultado_imc');

   if(imc < 18.5){
   exibirIMC.innerHTML = (imc + ' | Você está abaixo do peso');

   }
   if(imc >= 18.6 && imc <= 24.9){
      exibirIMC.innerHTML = (imc + ' | Você está no peso ideal');

   }
   if(imc >= 25 && imc <= 29.9){
      exibirIMC.innerHTML = (imc + ' | Você está levemente acima do peso');

   }
   if(imc >= 30 && imc <= 34.9){
      exibirIMC.innerHTML = (imc + ' | Você está com Obesidade de Grau I <p>Procure se exercitar</p>');

   }
   if(imc >= 35 && imc<= 39.9){
      exibirIMC.innerHTML = (imc + ' | Você está com Obesidade de Grau II (Severa) <p>Procure se exercitar</p>');
   }
   else{
      exibirIMC.innerHTML = (imc + ' | Você está com Obesidade de Grau III (Mórbida) <p>Procure um médico</p>');
   
   }
}


let reset = document.getElementById('reset');
let inputs = document.querySelectorAll('input');

reset.addEventListener('click', () => {
      inputs.forEach(input => input.value = '');
      const exibirIMC = document.getElementById('resultado_imc');
      exibirIMC.innerHTML= "";
})