﻿async function LlenarComboXServicios(URLServicio, ComboLlenar) {
    //Debe ir a la base de datos y llenar la información del combo de tipo producto
    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch(URLServicio,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        const Rpta = await Respuesta.json();
        //Se recorre en un ciclo para llenar el select con la información
        for (i = 0; i < Rpta.length; i++) {
            $(ComboLlenar).append('<option value=' + Rpta[i].id + '>' + Rpta[i].Descripcion + '</option>');
        }
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }
}