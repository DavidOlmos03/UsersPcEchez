jQuery(function () {
    //Registrar los botones para responder al evento click
    $("#dvMenu").load("../Paginas/Menu.html")
    //Registrar los botones para responder al evento click
    $("#btnInsertar").on("click", function () {
        //alert('Paso 1');
        EjecutarComandos("POST");
    });
    $("#btnActualizar").on("click", function () {
        EjecutarComandos("PUT");
    });
    $("#btnEliminar").on("click", function () {
        EjecutarComandos("DELETE");
    });
    $("#btnConsultar").on("click", function () {
        Consultar();
    });
});
async function Consultar() {
    //event.preventDefault();
    //Capturo los datos de entrada
    let IDEmpleado = $("#txtIDEmpleado").val();

    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch("http://localhost:63989/api/Empleado?id=" + IDEmpleado,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        const Rpta = await Respuesta.json();
        //Se presenta la respuesta en los objetos de la interfaz
        $("#txtNombre").val(Rpta.Nombre);
        $("#txtApellido").val(Rpta.Apellido);
        $("#txtPuesto").val(Rpta.Puesto);
        let Fecha = Rpta.FechaContratacion;
        if (Fecha != null) {
            $("#txtFechaContratacion").val(Fecha.split("T")[0]);
        }
        //$("#txtDireccion").val(Rpta.Direccion);
        //$("#txtEmail").val(Rpta.Email);
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }
}
async function EjecutarComandos(Comando) {
    //event.preventDefault();
    alert(Comando);
    //Capturo los datos de entrada
    let IDEmpleado = $("#txtIDEmpleado").val();
    let Nombre = $("#txtNombre").val();
    let Apellido = $("#txtApellido").val();
    let Puesto = $("#txtPuesto").val();
    let FechaContratacion = $("#txtFechaContratacion").val();

    //Defino el json
    let DatosEmpleado = {
        IDEmpleado: IDEmpleado,
        Nombre: Nombre,
        Apellido: Apellido,
        Puesto: Puesto,
        FechaContratacion: FechaContratacion,
    }

    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch("http://localhost:63989/api/Empleado",
            {
                method: Comando,
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(DatosEmpleado)
            });
        const Rpta = await Respuesta.json();
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(Rpta);
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }
}