/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento(){
let sueldoIngresado;
let porcentaje;
let resultado;

sueldoIngresado = document.getElementById("txtIdSueldo").value;
// sueldoIngresado = parseInt(sueldoIngresado);
sueldoIngresado = parseFloat(sueldoIngresado);

porcentaje = sueldoIngresado * 10 / 100;
// porcentaje = sueldoIngresado * .1;
resultado = sueldoIngresado + porcentaje;

document.getElementById("txtIdResultado").value = resultado;
}