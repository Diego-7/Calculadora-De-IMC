const result = document.querySelector(".imcResult");
		  calculate = () => {

		let js_peso= document.imcdados.f_peso.value;
		let js_altura= document.imcdados.f_altura.value;
		let js_imc= js_peso / (js_altura / 100 ^ 2);
		js_imc = parseFloat(js_imc);

		result.innerHTML = ("Seu IMC É: " + js_imc.toFixed(2));

		result.style.display = 'block';

		if (js_imc < 18.5){
			alert("ABAIXO DO PESO")
		} 
		
		else if (js_imc >= 18,5 && js_imc <= 24.9){
			alert("PESO NORMAL")
		}
	
		else if (js_imc >= 25 && js_imc <= 29.9){
			alert("SOBRE PESO")
		}
	
		else if (js_imc >= 30 && js_imc <= 39.9){
			alert("OBESIDADE")
		}
	
		else if(js_imc >= 40){
			alert("OBESIDADE MÓRBIDA")
		} 
	}

		function clearBtn(){
			result.style.display = 'none';
		}

		 //Press Enter for calculate
		 document.addEventListener('keypress', e=>{

			let btn = document.querySelector('#btnCa');

			if(e.key === 'Enter'){
				btn.click();
			}
		 })



		 

		




  
  

