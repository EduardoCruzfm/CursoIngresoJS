 /*  invierno 
			bariloche =>  aumenta 20%
			cordoba,cataratas =>  descuento 10%
			mar del plata =>  descuento 20%
			
	Verano
			bariloche =>  descuento 20%
			cordoba,cataratas =>  aumento 10%
			mar del plata =>  aumento 20%

	Otoño y Primavera
			bariloche =>  aumento 10%
			cataratas =>  aumento 10%
			mar del plata =>  aumento 10%
			cordoba =>  sin descuento
*/
 
 function mostrar(){
	let estadiaBase;
	let estacionIngresada; 
	
	let porc10;
	let porc20;

	let aumento10;
	let descuento10;
	let aumento20;
	let descuento20;

	estadiaBase = 15000;
	estacionIngresada = document.getElementById("txtIdEstacion").value;

	porc10 = estadiaBase * 10 /100;
	porc20 = estadiaBase * 20 /100;

	aumento10 = estadiaBase + porc10;
	descuento10 = estadiaBase - porc10;

	aumento20 = estadiaBase + porc20;
	descuento20 = estadiaBase - porc20;

	switch (estacionIngresada) {
		case "Invierno" && "Bariloche":
			alert("pepe")
			
			break;
	
		default:
			break;
	}






}//FIN DE LA FUNCIÓN