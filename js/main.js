function trello(){

	var ocultarCol = document.getElementsByClassName('borrarCol')[0];
	ocultarCol.classList.toggle('borrar');

	var contenedorGuardarLista = document.createElement('div');
	contenedorGuardarLista.setAttribute('class', 'guardarLista col-xs-2 col-sm-2 col-md-2 col-lg-2');

	var textoAgregarLista = document.createElement("textarea");
	textoAgregarLista.setAttribute("id", "textareaLista");
	textoAgregarLista.setAttribute("placeholder", "Añadir una lista...");
	textoAgregarLista.setAttribute("class", "input form-control");

	var botonAgregarLista = document.createElement("button");
	botonAgregarLista.setAttribute("class", "botonLista");
	var textoBotonUno= document.createTextNode("Guardar");

	botonAgregarLista.appendChild(textoBotonUno);
	contenedorGuardarLista.appendChild(textoAgregarLista);
	contenedorGuardarLista.appendChild(botonAgregarLista);
	todasLasListas.appendChild(contenedorGuardarLista);

	botonAgregarLista.addEventListener('click', function(){
		var divTarea = document.getElementById('contenedorTodo');
		var tituloLista = document.getElementById('textareaLista').value;
		document.getElementById('textareaLista').value = "";

		if(tituloLista == "" || tituloLista == null){
			alert("Debes ingresar el nombre de la lista");
			return; 
		}
		
		var columnaOrden = document.createElement('div');
		columnaOrden.setAttribute('class', 'col-xs-2 col-sm-2 col-md-2 col-lg-2');

		var tituloFinalLista = document.createElement('p');
		tituloFinalLista.setAttribute('class','name-list estiloTitulo');
		var textTarea = document.createTextNode(tituloLista);

		var botonAñadirTarjeta = document.createElement('button');
		botonAñadirTarjeta.setAttribute("class", "botonTarjeta");
		var textoBotonTarjeta = document.createTextNode("Añadir Tarjeta");

		divTarea.appendChild(columnaOrden);
		columnaOrden.appendChild(tituloFinalLista);
		tituloFinalLista.appendChild(textTarea);
		columnaOrden.appendChild(botonAñadirTarjeta);
		botonAñadirTarjeta.appendChild(textoBotonTarjeta);

   		botonAñadirTarjeta.addEventListener('click', function(){
		   	var textTarjetas = document.createElement('textarea');		
		   	textTarjetas.setAttribute("class", "textareaAñadirTarjeta");
			tituloFinalLista.appendChild(textTarjetas);
   		});
	});
}