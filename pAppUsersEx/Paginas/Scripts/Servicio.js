//Se define una variable de tipo datable, púlica para la página
//var oTabla = $("#tblProductos").DataTable();

jQuery(function () {
    //Registrar los botones para responder al evento click
    $("#dvMenu").load("../Paginas/Menu.html")
    //Registrar los botones para responder al evento click
    $("#btnInsertar").on("click", function () {
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
    //LlenarComboTipoProducto();
    //LlenarTablaEventos();
});
/*
async function LlenarTablaEventos() {
    LlenarTablaXServicios("http://localhost:63989/api/Eventos", "#tblEventos");
}
async function LlenarComboTipoProducto() {
    LlenarComboXServicios("http://localhost:63989/api/Empleado", "#cboIDEmpleado");
}*/
async function Consultar() {
    //event.preventDefault();
    //Capturo los datos de entrada
    let IDServicio = $("#txtIDServicio").val();

    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch("http://localhost:63989/api/Servicio?id=" + IDServicio,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        const Rpta = await Respuesta.json();
        //Se presenta la respuesta en los objetos de la interfaz
        $("#txtIDServicio").val(Rpta.IDServicio);
        $("#txtNombre").val(Rpta.Nombre);
        $("#txtDescripcion").val(Rpta.Descripción);
        $("#txtPrecio").val(Rpta.Precio);

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
    let IDServicio = $("#txtIDServicio").val();
    let Nombre = $("#txtNombre").val();
    let Descripción = $("#txtDescripcion").val();
    let Precio = $("#txtPrecio").val();

    //Defino el json
    let DatosServicio = {
        IDServicio: IDServicio,
        Nombre: Nombre,
        Descripción: Descripción,
        Precio: Precio,
    }

    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch("http://localhost:63989/api/Servicio",
            {
                method: Comando,
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(DatosServicio)
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