/*JAvaScript Document*/
		
var js_peso;
var js_altura;
var js_imc;	

		 function calcular(){

		
		
		js_peso= document.imcdados.f_peso.value;
		js_altura= document.imcdados.f_altura.value;
		js_imc= js_peso / (js_altura / 100 ^ 2);
		let resultado = document.querySelector(".resultadoDoImc");
		
		resultado.innerHTML = ("Seu IMC É: " + js_imc.toFixed(2))

		 }
		 

		




  
  

