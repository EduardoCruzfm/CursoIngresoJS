function mostrar(){
	//tomo el mes
	let mes = document.getElementById("txtIdMes").value;
	
	switch (mes) {
		case "Febrero":
			alert("Tiene 28 dias");
			break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Tiene 31 dias");
			break;
		default:
			alert("Tiene 30 dias")
			break;
	}


}//FIN DE LA FUNCIÓN