/* Eduardo Cruz
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    // delcaro las variables
    let sueldoIngresado;
    let porcentajeAplicado;
    let porcentaje;
    let resultado;

    porcentaje = 10;
 
    sueldoIngresado = document.getElementById("txtIdSueldo").value;
    // sueldoIngresado = parseInt(sueldoIngresado);

    //parseo por con parse float
    sueldoIngresado = parseFloat(sueldoIngresado);

    porcentajeAplicado = sueldoIngresado * porcentaje / 100; 
    // porcentajeAplicado = sueldoIngresado * .1;
    
    resultado = sueldoIngresado + porcentajeAplicado;

    document.getElementById("txtIdResultado").value = resultado;
    
}