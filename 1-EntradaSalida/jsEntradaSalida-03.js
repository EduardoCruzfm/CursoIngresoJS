/* Eduardo Cruz
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/


//  function mostrar() {

// 	let nombreIngresado; 
// 	let mensaje;

// 	nombreIngresado = document.getElementById("txtIdNombre").value;
// 	mensaje = "Te llamas " + nombreIngresado;
// 	alert(mensaje);
// 	document.getElementById("txtIdNombre").value = "";
//  }


/* Eduardo Cruz
Ejercico 3.bis: Ingresar descripcion (por prompt) y el preco por (por id).
el programa debera mostrar por alert la descripcion del producto junto al 
precio aumentado en un 30%. Pueden utilizar el html del ejercicio para resolverlo
*/

 function mostrar() {
	let producto;
	let precioDeProducto;
	let porcentaje;
	let PrecioFinal;
	let mensaje;

	producto = prompt("Ingrese nombre de un producto");
	precioDeProducto = parseInt(document.getElementById("txtIdNombre").value);

	porcentaje = precioDeProducto * 30 / 100;
	PrecioFinal = precioDeProducto + porcentaje;

	mensaje = `El producto es ${producto} y cuesta ${PrecioFinal}`;
	alert(mensaje);

 }
//  https://onlinegdb.com/W9No2qNEj
