const result = document.querySelector(".imcResult");

		  calculate = () => {

		let js_peso= document.imcdados.f_peso.value;
		let js_altura= document.imcdados.f_altura.value;
		let js_imc= js_peso / (js_altura / 100 ^ 2);

		result.innerHTML = ("Seu IMC É: " + js_imc.toFixed(2));

		result.style.display = 'block';

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



		 

		




  
  

