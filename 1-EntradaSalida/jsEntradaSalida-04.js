/* Eduardo Cruz
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
 
		
function mostrar(){
	// Reservo esapcio en memoria para guardar el nombre del usuario
	let nombre;

/*	Guardo en la variable nombre el texto que escribio el usuario dentro
	   de la ventana prompt  */
	nombre = prompt("Ingrese su nombre");
	
	/* copio el nombre que tengo guardado en la variable que tengo embebida
	en la pagina html */
	document.getElementById("txtIdNombre").value = nombre;
};

