/* Eduardo Cruz
1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () {
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let mensaje;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;
    mensaje = `La suma es $ ${suma}`;
    alert(mensaje);

}
function Promedio () {
    let precioUno;
    let precioDos;
    let precioTres;
    let promedio;
    let mensaje;

    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);

    promedio = (precioUno + precioDos + precioTres) / 3;
    promedio = promedio.toFixed(2);

    mensaje = `El promedio es $ ${promedio}`;
    alert(mensaje);
	
}

function PrecioFinal () {
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;
    let IVA;   
    let promedio;       
    let preciofinal;  
    let mensaje;

    IVA = 21 / 100; 
        
    precioUno = parseFloat(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseFloat(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseFloat(document.getElementById("txtIdPrecioTres").value);  
        
    suma = precioUno + precioDos + precioTres;
    promedio = suma * IVA;

    preciofinal = suma + promedio;
    preciofinal = preciofinal.toFixed(2)

    mensaje = `El precio final es $ ${preciofinal}`;
    alert(mensaje);

}