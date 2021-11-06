
		

		let js_peso;
		let js_altura;
		let js_imc;
        let js_resultado;
        

		function calcular() {
		
		js_peso= document.imcdados.f_peso.value;
		js_altura= document.imcdados.f_altura.value;
		js_imc= js_peso / (js_altura / 100 ^ 2);
        
        window.alert('Seu IMC é: ' + js_imc);
}

  
  

