function mostrar(){
	//Genero el número RANDOM entre 1 y 10 
	let aleatorio;
	let max = 10;
	let min = 1;

	aleatorio = Math.floor((Math.random() * (max - min + 1)) + min);

	alert(aleatorio)


}//FIN DE LA FUNCIÓN


/* Math.floor(Math.random() * (max - min + 1) + min)
Math.floor redondea hacia abajo los numeros con decimales */

/* Math.round(Math.random() * (max - min) + min)
Math.round redondea hacia el entero mas cercano */let 