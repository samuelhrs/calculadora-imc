const peso = document.getElementById('peso');
const altura = document.getElementById('altura');



function calcular_imc(){
   let resultado = peso.value / (altura.value * altura.value);

   const imc = resultado.toFixed(1);

   const exibirIMC = document.getElementById('resultado_imc');

   if(!peso.value || !altura.value){
      alert('Por favor insira o seu peso e sua altura');
   }
   else{
      if(imc <= 18.5){
      exibirIMC.innerHTML = (imc + ' | Você está abaixo do peso');
      exibirIMC.style.color = 'yellow';

      }
      else if(imc >= 18.6 && imc <= 24.9){
         exibirIMC.innerHTML = (imc + ' | Você está no peso ideal');
         exibirIMC.style.color = 'green';

      }
      else if(imc >= 25 && imc <= 29.9){
         exibirIMC.innerHTML = (imc + ' | Você está levemente acima do peso');
         exibirIMC.style.color = 'white';

      }
      else if(imc >= 30 && imc <= 34.9){
         exibirIMC.innerHTML = (imc + ' | Você está com Obesidade de Grau I');
         exibirIMC.style.color = 'white';

      }
      else if(imc >= 35 && imc<= 39.9){
         exibirIMC.innerHTML = (imc + ' | Você está com Obesidade de Grau II (Severa)');
         exibirIMC.style.color = 'red';
      }
      else{
         exibirIMC.innerHTML = (imc + ' | Você está com Obesidade de Grau III (Mórbida)');
         exibirIMC.style.color = 'darkred';
      }
   }
}   


let reset = document.getElementById('reset');
let inputs = document.querySelectorAll('input');

reset.addEventListener('click', () => {
      inputs.forEach(input => input.value = '');
      const exibirIMC = document.getElementById('resultado_imc');
      exibirIMC.innerHTML= "";
})