//Se define una variable de tipo datable, púlica para la página
//var oTabla = $("#tblEventos").DataTable();

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
    //LlenarComboIDEmpleado();

    LlenarTablaDevolucion();
});
async function LlenarTablaDevolucion() {
    LlenarTablaXServicios("http://localhost:60006/api/Devolucion", "#tblDevolucion");
}
/*
async function LlenarComboIDEmpleado() {
    LlenarComboXServicios("http://localhost:63989/api/Empleado", "#cboIDEmpleado");
}*/
async function Consultar() {
    //event.preventDefault();
    //Capturo los datos de entrada
    let SerialDevolucion = $("#txtSerialDevolucion").val();

    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch("http://localhost:60006/api/Devolucion?Serial=" + SerialDevolucion,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        const Rpta = await Respuesta.json();
        //Se presenta la respuesta en los objetos de la interfaz
        $("#txtUserDevolucion").val(Rpta.User);
        $("#txtSerialDevolucion").val(Rpta.Serial_);
        $("#txtPcNameDevolucion").val(Rpta.PC_Name);
        let InstallationDateDevolucion = Rpta.Installation_Date;
        if (InstallationDateDevolucion != null) {
            $("#txtInstallationDateDevolucion").val(InstallationDateDevolucion.split("T")[0]);
        }
        //$("#txtInstallationDateAlquilado").val(Rpta.Installation_Date);
        $("#txtPlatePCDevolucion").val(Rpta.Plate_PC);
        $("#txtSpecificationsDevolucion").val(Rpta.Specifications_);
        $("#txtRamDevolucion").val(Rpta.Ram);
        $("#cboDesktopLaptopDevolucion").val(Rpta.Desktop_Laptop);
        $("#txtDomainDevolucion").val(Rpta.Domain);


        /*let FechaInicio = Rpta.FechaInicio;
        let FechaFin = Rpta.FechaFin;
        if (FechaInicio != null) {
            $("#txtFechaInicio").val(FechaInicio.split("T")[0]);
        }
        if (FechaFin != null) {
            $("#txtFechaFin").val(FechaFin.split("T")[0]);
        }*/
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
    let UserDevolucion = $("#txtUserDevolucion").val();
    let SerialDevolucion = $("#txtSerialDevolucion").val();
    let PcNameDevolucion = $("#txtPcNameDevolucion").val();
    let InstallationDateDevolucion = $("#txtInstallationDateDevolucion").val();
    let PlatePCDevolucion = $("#txtPlatePCDevolucion").val();
    let SpecificationsDevolucion = $("#txtSpecificationsDevolucion").val();
    let RamDevolucion = $("#txtRamDevolucion").val();
    let DesktopLaptopDevolucion = $("#cboDesktopLaptopDevolucion").val();
    let DomainDevolucion = $("#txtDomainDevolucion").val();

//HERE

    //Defino el json
    let DatosAlquilado = {
        User: UserDevolucion,
        Serial_: SerialDevolucion,
        PC_Name: PcNameDevolucion,
        Installation_Date: InstallationDateDevolucion,
        Plate_PC: PlatePCDevolucion,
        Specifications_: SpecificationsDevolucion,
        Ram: RamDevolucion,
        Desktop_Laptop: DesktopLaptopDevolucion,
        Domain: DomainDevolucion
    }

    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch("http://localhost:60006/api/Devolucion",
            {
                method: Comando,
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(DatosAlquilado)
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

