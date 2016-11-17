function trello(){
	var contenedorGrandeUno = document.getElementById('contenedorGrandeUno');
	var ocultar = document.getElementById('añadirLista');
	ocultar.classList.toggle('borrar');
	var contenedorGuardar = document.createElement('div');
	contenedorGuardar.setAttribute('id', 'guardarLista');
	var textoAgregarLista = document.createElement("textarea");
	textoAgregarLista.setAttribute("id", "textareaLista");
	textoAgregarLista.setAttribute("placeholder", "Añadir una lista...");
	var botonAgregarLista = document.createElement("button");
	botonAgregarLista.setAttribute("class", "botonLista");
	var textoBotonUno= document.createTextNode("Guardar");
	botonAgregarLista.appendChild(textoBotonUno);
	contenedorGuardar.appendChild(textoAgregarLista);
	contenedorGuardar.appendChild(botonAgregarLista);
	contenedorGrandeUno.appendChild(contenedorGuardar);

	botonAgregarLista.addEventListener('click',function(){
		var contenedorDeListas = document.getElementById('filaListas');
		var nombreListaUsuario = document.getElementById('textareaLista').value;

		var todoListaIndividual = document.createElement('div');
		todoListaIndividual.setAttribute('class', 'listaIndividual');
		todoListaIndividual.setAttribute('class', 'col-xs-2 col-sm-2 col-md-2 col-lg-2');

		var pDeTitulo = document.createElement("p");
		pDeTitulo.setAttribute("class", "estiloTitulo");
		var nodoLista = document.createTextNode(nombreListaUsuario);

		var botonAñadir = document.createElement("button");
		botonAñadir.setAttribute("class", "botonTarjeta");
		var textoBotonAñadir= document.createTextNode("Añadir tarjeta");

		pDeTitulo.appendChild(nodoLista);
		botonAñadir.appendChild(textoBotonAñadir);
		todoListaIndividual.appendChild(pDeTitulo);
		todoListaIndividual.appendChild(botonAñadir);
		contenedorDeListas.appendChild(todoListaIndividual);

		botonAñadir.addEventListener('click', function(){
			var containerTarjeta = document.getElementById("contenedorGrandeDos");
			var pDeTarjeta = document.createElement("textarea");
			pDeTarjeta.setAttribute("id", "estiloTarjeta");
	        var tareasDeTarjetas = document.getElementsByClassName("estiloTitulo")[0];
	        tareasDeTarjetas.appendChild(pDeTarjeta);

		});
	});
}