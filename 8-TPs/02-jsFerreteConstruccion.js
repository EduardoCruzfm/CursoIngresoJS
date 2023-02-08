/* Eduardo Cruz
2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () {
    let largo;
    let ancho;
    let perimetro;
    let alambre;
    let mensaje;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    //Formula de perimetro
    perimetro = (largo + ancho) * 2;
    //Cubrir 3 veces el terreno con alambre
    alambre = perimetro * 3;
    mensaje = `La cantidad de alambre a comprar es ${alambre}`;
    alert(mensaje);

}

function Circulo () {
    let radio;
    let diametro;
    let perimetro;
    let alambre;
    let mensaje;
    // const PI = Math.PI => es igual a 3.14... 

    radio = parseInt(document.getElementById("txtIdRadio").value);
    //Formula de diametro
    diametro = radio * 2;
    perimetro = 3.14 * diametro;
	//Cubrir 3 veces el terreno redonde con alambre
    alambre = perimetro * 3;
    alambre = alambre.toFixed(2)

    mensaje = `La cantidad de alambre a comprar es ${alambre}`;
    alert(mensaje);
}
function Materiales () {
    let area;
    let largo;
    let ancho;
    let cemento;
    let cal;
    let mensaje;

    largo = parseInt(document.getElementById("txtIdLargo").value);
    ancho = parseInt(document.getElementById("txtIdAncho").value);
    //Formula de area    o de m2  1 de area = 1m2
    area = largo * ancho; 

    //Entran 2 bolsas de cementro por 1 de area/m2
    cemento = area * 2;
    //Entran 3 de cal por 1 de area/m2
    cal = area * 3;
    mensaje = `Para un contrapiso de ${area}m2 necesito ${cemento} bolsas de cemernto y ${cal} bolsas de cal`;
    alert(mensaje);
	
}