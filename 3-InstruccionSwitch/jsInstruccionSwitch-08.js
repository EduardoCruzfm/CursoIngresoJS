function mostrar(){
	let destinoIngresado 
	destinoIngresado = document.getElementById("txtIdDestino").value;

switch (destinoIngresado) {
	case "Bariloche":
	case "Ushuaia":
		alert("Hace FRIO");
		break;

	default:
		alert("Hace CALOR");
		break;
}

}//FIN DE LA FUNCIÓN