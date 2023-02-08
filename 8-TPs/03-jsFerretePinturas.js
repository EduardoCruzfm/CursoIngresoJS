/*3. Eduardo Cruz	
Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
	let temperaturaF;
    let temperaturaC;
    let mensaje;

    temperaturaF = parseFloat(document.getElementById("txtIdTemperatura").value);
    // Pasaje de Fahrenheit => a Centigrados 
    temperaturaC = (temperaturaF - 32) / 1.8;
    temperaturaC = temperaturaC.toFixed(2);

    mensaje = `${temperaturaF} grados Fahrenheit son ${temperaturaC} grados Centígrados`;
    alert(mensaje);
}


function CentigradosFahrenheit() {
    let temperaturaC;
    let temperaturaF;
    let mensaje;

    temperaturaC = parseFloat(document.getElementById("txtIdTemperatura").value);
    //Pasaje de Centigrados => a Fahrenheit
    temperaturaF = 1.8 * temperaturaC + 32;

    temperaturaF = temperaturaF.toFixed(2);

    mensaje = `${temperaturaC} grados Centígrados son ${temperaturaF} grados Fahrenheit`;
    alert(mensaje);
}
