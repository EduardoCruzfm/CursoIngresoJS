/* Eduardo Cruz
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
/*
function mostrarAumento(){
    let importe;
    let porcentaje;
    let importeFinal;
    let descuento; 

    descuento = 25; 


    importe = document.getElementById("txtIdImporte").value;
    importe = parseFloat(importe);

    porcentaje = importe * descuento /100;
    importeFinal= importe + porcentaje; 
    document.getElementById("txtIdResultado").value = importeFinal;	

 }
*/

/* Eduardo Cruz
Ejercicio 10.bis: Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
pedirle al usuario un % de descuento y mostrar el importe 
en el cuadro de texto "RESULTADO"
*/

function mostrarAumento(){
    let importe;
    let descuento;
    let porcentaje;

    importe = parseInt(document.getElementById("txtIdImporte").value);
   
    descuento = parseInt(prompt("Ingrese un % de descuento"));

    porcentaje = importe * descuento / 100; //porcentaje 100% * porcentajeAconseguir(20%)/100(elcien es fijo)
    precioFinal = importe - porcentaje;

    //
    document.getElementById("txtIdResultado").value = precioFinal;

}
// https://onlinegdb.com/mFXq8l6KdT