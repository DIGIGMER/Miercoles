		var contador = 1;
		const CrearHijo = function(){
			const hijoNuevo = document.createElement("div");
			hijoNuevo.style.width = "30%";
			hijoNuevo.style.height = "30px";
			hijoNuevo.style.border = "1px solid #000";
			hijoNuevo.style.display = "inline-block";
			hijoNuevo.innerText = "hijo" +contador;
			contador++;
			return hijoNuevo;
		}

		const contenedor = document.createElement("div");
		contenedor.style.width = "1000px";
		contenedor.style.height = "600px";
		contenedor.style.border = "1px solid #000";
		const titulo = document.createElement("div");
		titulo.style.width = "1000px";
		titulo.style.height = "30px";
		titulo.style.border = "1px solid #000";
		titulo.innerText = "esto es un titulo";
		titulo.style.textAlign = "center";
		titulo.style.backgroundColor = "red";

		const divizq = document.createElement("div");
		divizq.style.width = "498px";
		divizq.style.height = "300px";
		divizq.style.border = "1px solid #4689fb";
		divizq.style.display = "inline-block";

		const divder = divizq.cloneNode(true);
		divder.style.border = "1px solid red";

		const condicional = 10;
		var num_aleatorio = Math.floor(Math.random()*11);
		for (var variable = 1;variable <= condicional; variable++) {
			var hijo_automatico = CrearHijo();
			divizq.appendChild(hijo_automatico);
			if (variable === 6) {
				hijo_automatico.style.backgroundColor = "yellow";
			}
			else if(variable === 9){
				hijo_automatico.style.backgroundColor = "violet";
			}
			if (variable === num_aleatorio) {
				hijo_automatico.style.backgroundColor = "orange";
			}
		}

		document.body.appendChild(contenedor);
		contenedor.appendChild(titulo);
		contenedor.appendChild(divizq);
		contenedor.appendChild(divder);
