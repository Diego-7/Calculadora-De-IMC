
		  calculate = () => {

		let js_peso= document.imcdados.f_peso.value;
		let js_altura= document.imcdados.f_altura.value;
		let js_imc= js_peso / (js_altura / 100 ^ 2);

		let result = document.querySelector(".imcResult");
		
		result.innerHTML = ("Seu IMC É: " + js_imc.toFixed(2));

		 }

		 //Press Enter for calculate
		 document.addEventListener('keypress', e=>{

			let btn = document.querySelector('#btnCa');

			if(e.key === 'Enter'){
				btn.click();
			}
		 })



		 

		




  
  

