/*Eduardo Cruz
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
 */
function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	let max = 10;
	let min = 1;
	let mensaje;

	nota = Math.floor((Math.random() * (max - min + 1)) + min);

	if(nota >= 9){
		mensaje = nota + " EXCELENTE";
	
	}
	else if(nota >= 4){
		mensaje = nota + " APROBÓ";
	}
	else{
		mensaje = nota + " Vamos, la proxima se puede";
	}

	alert(mensaje);

}//FIN DE LA FUNCIÓN