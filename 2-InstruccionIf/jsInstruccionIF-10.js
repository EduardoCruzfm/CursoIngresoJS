function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	let max = 10;
	let min = 1;

	nota = Math.floor((Math.random() * (max - min + 1)) + min);


	if(nota >= 9){
		alert(nota + " EXCELENTE");
	}
	else if(nota >= 4){
		alert(nota + " APROBÓ")
	}
	else{
		alert(nota + " Vamos, la proxima se puede")
	}

}//FIN DE LA FUNCIÓN