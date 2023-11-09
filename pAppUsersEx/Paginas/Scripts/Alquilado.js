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
    LlenarTablaAlquilado();
});
async function LlenarTablaAlquilado() {
    LlenarTablaXServicios("http://localhost:60006/api/Alquilado", "#tblAlquilado");
}
async function Consultar() {
    //Capturo los datos de entrada
    let SerialAlquilado = $("#txtSerialAlquilado").val();

    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch("http://localhost:60006/api/Alquilado?Serial=" + SerialAlquilado,
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                }
            });
        const Rpta = await Respuesta.json();
        //Se presenta la respuesta en los objetos de la interfaz
        $("#txtUserAlquilado").val(Rpta.User);
        $("#txtSerialAlquilado").val(Rpta.Serial_);
        $("#txtPcNameAlquilado").val(Rpta.PC_Name);
        let InstallationDateAlquilado = Rpta.Installation_Date;
        if (InstallationDateAlquilado != null) {
            $("#txtInstallationDateAlquilado").val(InstallationDateAlquilado.split("T")[0]);
        }
        //$("#txtInstallationDateAlquilado").val(Rpta.Installation_Date);
        $("#txtPlatePCAlquilado").val(Rpta.Plate_PC);
        $("#txtSpecificationsAlquilado").val(Rpta.Specifications_);
        $("#txtRamAlquilado").val(Rpta.Ram);
        $("#cboDesktopLaptopAlquilado").val(Rpta.Desktop_Laptop);
        $("#txtDomainAlquilado").val(Rpta.Domain);
        $("#cboStatusPCAlquilado").val(Rpta.Status_PC);
       
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
        /*
            Este tipo de errores se deben presentar en una ventana emergente 
        */
    }
}
async function EjecutarComandos(Comando) {
    //Capturo los datos de entrada
    let UserAlquilado = $("#txtUserAlquilado").val();
    let SerialAlquilado = $("#txtSerialAlquilado").val();
    let PcNameAlquilado = $("#txtPcNameAlquilado").val();
    let InstallationDateAlquilado = $("#txtInstallationDateAlquilado").val();
    let PlatePCAlquilado = $("#txtPlatePCAlquilado").val();
    let SpecificationsAlquilado = $("#txtSpecificationsAlquilado").val();
    let RamAlquilado = $("#txtRamAlquilado").val();
    let DesktopLaptopAlquilado = $("#cboDesktopLaptopAlquilado").val();
    let DomainAlquilado = $("#txtDomainAlquilado").val();
    let StatusPCAlquilado = $("#cboStatusPCAlquilado").val();
    
    //Defino el json
    let DatosAlquilado = {
        User: UserAlquilado,
        Serial_: SerialAlquilado,
        PC_Name: PcNameAlquilado,
        Installation_Date: InstallationDateAlquilado,
        Plate_PC: PlatePCAlquilado,
        Specifications_: SpecificationsAlquilado,
        Ram: RamAlquilado,
        Desktop_Laptop: DesktopLaptopAlquilado,
        Domain: DomainAlquilado,
        Status_PC: StatusPCAlquilado

    }

    //Invocamos el servicio a través del fetch, usando el método fetch de javascript
    try {
        const Respuesta = await fetch("http://localhost:60006/api/Alquilado",
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
       //$("#dvMensaje").html(Rpta);
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }   
}

