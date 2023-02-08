/*Eduardo Cruz
4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 
pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%.

B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un 
descuento del 40 % y si es de otra marca el descuento es del 30%.

C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” 
se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.

D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es 
del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de 
otra marca un 5%.

E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% 
de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 cantidaDeLamparas= txtIdCantidad /marca= Marca /descuento= txtIdprecioDescuento
 */
function CalcularPrecio () {
    let precio;
    let cantidadDeLamparas;
    let marca;
    let importeFinalDescuento;
    

    precio = 35;
    cantidadDeLamparas = parseInt(document.getElementById("txtIdCantidad").value);
    marca = document.getElementById("Marca").value;

    if(cantidadDeLamparas >= 6 ){
        //Descuento del 50%
        let compra;
        let porsentaje;
        let descuento;

        compra = cantidadDeLamparas * precio;
        porsentaje = compra * 50/100;
        descuento = compra - porsentaje;

        if(descuento > 120){
            //Se debe sumar un 10% de ingresos brutos
            let porsentaje; 
            let importeFinal;
            let mensaje;
    
            porsentaje = descuento * 10/100;
            importeFinal = descuento + porsentaje;
            mensaje = `”IIBB Usted pago ${importeFinal}”, siendo ${porsentaje} el impuesto que se pagó`;
    
            document.getElementById("txtIdprecioDescuento").value = mensaje;
             //alert(mensaje);
        }
        else{
            document.getElementById("txtIdprecioDescuento").value = descuento;
        }


    }
    else if(cantidadDeLamparas == 5 && marca == "ArgentinaLuz"){
        //Descuento del 40 %
        let compra;
        let porsentaje;
        let descuento;

        compra = cantidadDeLamparas * precio;
        porsentaje = compra * 40/100;
        descuento = compra - porsentaje;

        document.getElementById("txtIdprecioDescuento").value = descuento;

    } 
    else if(cantidadDeLamparas == 5 && marca != "ArgentinaLuz"){
        //Descuento del 30 %
        let compra;
        let porsentaje;
        let descuento;

        compra = cantidadDeLamparas * precio;
        porsentaje = compra * 30/100;
        descuento = compra - porsentaje;

        document.getElementById("txtIdprecioDescuento").value = descuento;
    }
    else if (cantidadDeLamparas == 4 && marca == "ArgentinaLuz" || cantidadDeLamparas == 4 && marca == "FelipeLamparas"){
        //Descuento del 25 % 
        let compra;
        let porsentaje;
        let descuento;

        compra = cantidadDeLamparas * precio;
        porsentaje = compra * 25/100;
        descuento = compra - porsentaje;
        
        document.getElementById("txtIdprecioDescuento").value = descuento;
    }
    else if(cantidadDeLamparas == 4 && marca != "ArgentinaLuz" || cantidadDeLamparas == 4 && marca != "FelipeLamparas"){
        //Si es de otra marca el descuento es del 20%.
        let compra;
        let porsentaje;
        let descuento;

        compra = cantidadDeLamparas * precio;
        porsentaje = compra * 20/100;
        descuento = compra - porsentaje;

        document.getElementById("txtIdprecioDescuento").value = descuento;
    }
    else if(cantidadDeLamparas == 3 && marca == "ArgentinaLuz"){
        //Descuento 15%
        let compra;
        let porsentaje;
        let descuento;

        compra = cantidadDeLamparas * precio;
        porsentaje = compra * 15/100;
        descuento = compra - porsentaje;
        
        document.getElementById("txtIdprecioDescuento").value = descuento;

    }
    else if(cantidadDeLamparas == 3 &&  marca == "FelipeLamparas"){
        //Se hace un descuento del 10 % 
        let compra;
        let porsentaje;
        let descuento;

        compra = cantidadDeLamparas * precio;
        porsentaje = compra * 10/100;
        descuento = compra - porsentaje;
        
        document.getElementById("txtIdprecioDescuento").value = descuento;
    }
    else if(cantidadDeLamparas == 3 && marca != "ArgentinaLuz" || cantidadDeLamparas == 3 && marca != "FelipeLamparas"){
        //Descuento de 5%
        let compra;
        let porsentaje;
        let descuento;

        compra = cantidadDeLamparas * precio;
        porsentaje = compra * 5/100;
        descuento = compra - porsentaje;
       
        document.getElementById("txtIdprecioDescuento").value = descuento;
    }
	
}
