function trello(){
	var containerBotonesUno = document.getElementsByClassName("contenedorBotonUno")[0];
  	var nuevaLista = document.createElement("div");
  	var textoAgregarLista = document.createElement("textarea");
  	var botonAgregarLista = document.createElement("button");
  	var textoBotonUno= document.createTextNode("Guardar");
  	botonAgregarLista.appendChild(textoBotonUno);
  	textoAgregarLista.setAttribute("class", "textareaLista");
  	textoAgregarLista.setAttribute("placeholder", "Ingresa el nombre de la lista")
  	botonAgregarLista.setAttribute("class", "botonLista");
  	nuevaLista.appendChild(textoAgregarLista);
  	nuevaLista.appendChild(botonAgregarLista);
  	containerBotonesUno.appendChild(nuevaLista);
  
  	var botondelaLista = document.getElementsByClassName("botonLista")[0];

  	botondelaLista.addEventListener('click', function(){
	    var nombreListaUsuario = document.getElementsByClassName("textareaLista")[0].value;
	    var nodoLista = document.createTextNode(nombreListaUsuario);
	    var containerTitulo = document.getElementsByClassName("contenedorTitulo")[0];
	    var pDeTitulo = document.createElement("p");
	    pDeTitulo.setAttribute("class", "estiloTitulo");
	    pDeTitulo.appendChild(nodoLista);
	    containerTitulo.appendChild(pDeTitulo);
	    var contenedorParaBorrar= document.getElementsByClassName("estoSeBorra")[0];
	    contenedorParaBorrar.style.display='none';
	    var containerTarjetas = document.getElementsByClassName("contenedorTarjetas")[0];
	    var botonParaLista = document.createElement("textarea");
	    botonParaLista.setAttribute("class", "textareaAñadirTarjeta");
	    containerTarjetas.appendChild(botonParaLista);

	    var botondelaTarjeta = document.getElementsByClassName("textareaAñadirTarjeta")[0];
    
    	botondelaTarjeta.addEventListener('click', function botonParaAñadir(){
     		var elBotonAñadir = document.createElement("button");
      		var textoBotonAñadir= document.createTextNode("Añadir");
      		elBotonAñadir.setAttribute("class", "botonTarjeta");
      		elBotonAñadir.appendChild(textoBotonAñadir);
      		containerTarjetas.appendChild(elBotonAñadir);
      		botondelaTarjeta.removeEventListener('click', botonParaAñadir);

    		var botonParaTarjeta = document.getElementsByClassName("botonTarjeta")[0];

      		botonParaTarjeta.addEventListener('click', function (){
	      		var nombreTarjetaUsuario = document.getElementsByClassName("textareaAñadirTarjeta")[0].value;
	        	var nodoTarjeta = document.createTextNode(nombreTarjetaUsuario);
	        	var containerTarjeta = document.getElementsByClassName("contenedorTarjetas")[0];
	        	var pDeTarjeta = document.createElement("p");
	        	pDeTarjeta.setAttribute("class", "estiloTarjeta");
	        	pDeTarjeta.appendChild(nodoTarjeta);
	        	var tareasDeTarjetas = document.getElementsByClassName("estiloTitulo")[0];
	        	tareasDeTarjetas.appendChild(pDeTarjeta);
			});
    	});
  	});
}