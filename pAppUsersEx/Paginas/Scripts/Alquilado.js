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

    LlenarTablaAlquilado();
});
async function LlenarTablaAlquilado() {
    LlenarTablaXServicios("http://localhost:60006/api/Alquilado", "#tblAlquilado");
}
/*
async function LlenarComboIDEmpleado() {
    LlenarComboXServicios("http://localhost:63989/api/Empleado", "#cboIDEmpleado");
}*/
async function Consultar() {
    //event.preventDefault();
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
    
    //alert(Comando);
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
    

//HERE

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
        $("#dvMensaje").html(Rpta);
    }
    catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }   
}

/*
 *Diferents alerts windows
 */
async function PostAlert() {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "Ingresaras un nuevo PC!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, guardar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            EjecutarComandos("POST");
            swalWithBootstrapButtons.fire({
                title: "Guardado!",
                text: "El nuevo PC ha sido ingresado con exito.",
                icon: "success"
            });           
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "No se ha ingresado el PC",
                icon: "error"
            });
        }
    });
}

async function PutAlert() {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "Actualizaras los datos de un PC!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Si, actualizar!",
        cancelButtonText: "No, cancelar!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            EjecutarComandos("PUT");
            swalWithBootstrapButtons.fire({
                title: "Actualizado!",
                text: "Los datos de tu PC han sido actualizados.",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "No se han actualizado los datos de ningun PC",
                icon: "error"
            });
        }
    });
}
async function DeleteAlert() {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
        title: "¿Estás seguro?",
        text: "Eliminaras un PC de tu base de datos!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, eliminar!",
        cancelButtonText: "No, cancelar!",       
        reverseButtons: true
        
    }).then((result) => {
        if (result.isConfirmed) {
            EjecutarComandos("DELETE");
            swalWithBootstrapButtons.fire({
                title: "Eliminado!",
                text: "El PC indicado ha sido eliminado",
                icon: "success"
            });
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire({
                title: "Cancelado",
                text: "No se ha eliminado ningún PC",
                icon: "error"
            });
        }
    });
}