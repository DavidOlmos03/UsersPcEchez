//Se define una variable de tipo datable, púlica para la página
//var oTabla = $("#tblEventos").DataTable();

jQuery(function () {
    //Registrar los botones para responder al evento click
    $("#dvMenu").load("../Paginas/Menu.html")
    //Registrar los botones para responder al evento click
    $("#btnInsertar").on("click", function () {
        PostAlert();
    });
    $("#btnActualizar").on("click", function () {
        PutAlert();
    });
    $("#btnEliminar").on("click", function () {
        DeleteAlert();
    });
    $("#btnConsultar").on("click", function () {
        Consultar();
    });
    //LlenarComboIDEmpleado();

    LlenarTablaPropio();
});
async function LlenarTablaPropio() {
    LlenarTablaXServicios("http://localhost:60006/api/Propio", "#tblPropio");
}
/*
async function LlenarComboIDEmpleado() {
    LlenarComboXServicios("http://localhost:63989/api/Empleado", "#cboIDEmpleado");
}*/
async function Consultar() {
    //Capturo los datos de entrada
    let SerialPropio = $("#txtSerialPropio").val();

    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch("http://localhost:60006/api/Propio?Serial=" + SerialPropio,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        const Rpta = await Respuesta.json();
        //Se presenta la respuesta en los objetos de la interfaz
        $("#txtUserPropio").val(Rpta.User);
        $("#txtSerialPropio").val(Rpta.Serial_);
        $("#txtPcNamePropio").val(Rpta.PC_Name);
        let InstallationDatePropio = Rpta.Installation_Date;
        if (InstallationDatePropio != null) {
            $("#txtInstallationDatePropio").val(InstallationDatePropio.split("T")[0]);
        }
        //$("#txtInstallationDateAlquilado").val(Rpta.Installation_Date);
        $("#txtSpecificationsPropio").val(Rpta.Specifications_);
        $("#txtRamPropio").val(Rpta.Ram);
        $("#cboDesktopLaptopPropio").val(Rpta.Desktop_Laptop);
        $("#txtDomainPropio").val(Rpta.Domain);
    
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }
}
async function EjecutarComandos(Comando) {
    //Capturo los datos de entrada
    let UserPropio = $("#txtUserPropio").val();
    let SerialPropio = $("#txtSerialPropio").val();
    let PcNamePropio = $("#txtPcNamePropio").val();
    let InstallationDatePropio = $("#txtInstallationDatePropio").val();
    let SpecificationsPropio = $("#txtSpecificationsPropio").val();
    let RamPropio = $("#txtRamPropio").val();
    let DesktopLaptopPropio = $("#cboDesktopLaptopPropio").val();
    let DomainPropio = $("#txtDomainPropio").val();

    //Defino el json
    let DatosPropio = {
        User: UserPropio,
        Serial_: SerialPropio,
        PC_Name: PcNamePropio,
        Installation_Date: InstallationDatePropio,
        Specifications_: SpecificationsPropio,
        Ram: RamPropio,
        Desktop_Laptop: DesktopLaptopPropio,
        Domain: DomainPropio
    }

    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch("http://localhost:60006/api/Propio",
            {
                method: Comando,
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(DatosPropio)
            });
        const Rpta = await Respuesta.json();
        //Se presenta la respuesta en el div mensaje
        //$("#dvMensaje").html(Rpta);
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }
}

