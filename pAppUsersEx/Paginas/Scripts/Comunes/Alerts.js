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