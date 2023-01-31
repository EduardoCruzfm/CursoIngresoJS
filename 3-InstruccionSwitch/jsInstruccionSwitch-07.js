function mostrar(){
	let destinoIngresado 
	destinoIngresado = document.getElementById("txtIdDestino").value;

	switch (destinoIngresado) {

		case "Bariloche":
			alert("Esta en el Oeste");
			break;

		case "Cataratas":
			alert("Esta en el Norte");
			break;

		case "Mar del plata":
			alert("Estas en el Este");
			break;

		case "Ushuaia":
			alert("Esta en el sur");
			break;
	
		default:
			break;
	}
}//FIN DE LA FUNCIÓN