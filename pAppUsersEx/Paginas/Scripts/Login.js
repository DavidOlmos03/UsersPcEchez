jQuery(function () {
    //Registrar los botones para responder al evento click
    $("#btnLogin").on("click", function () {
        login();
    });
    $("#btnLogOut").on("click", function () {
        logOut();
    });
});


async function login() {
    let email = $("#txtEmail").val();
    let password = $("#txtPassword").val();
    try {
        const Respuesta = await fetch("http://localhost:60006/api/Login?email=" + email + "&password=" + password,
           //Login ? email = prueba4@example.com & password=prueba4
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                //body: JSON.stringify(DatosAlquilado)
            });
        const Rpta = await Respuesta.json();
        //let passwordDB = Rpta.contraseña;
        //alert("Error al intentar sesion, vuelve a intentarlo");
        if (Rpta != null) {
            // Redirige y reemplaza la entrada en el historial de navegación
            
            window.location.replace("http://localhost:60277/Paginas/Alquilado.html");
            

        } else {
            window.location.replace("http://localhost:60277/Paginas/login.html");
            
        }
    } catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
        alert(error);
    }
}

async function logOut() {

    try {
        const Respuesta = await fetch("http://localhost:60006/api/Login",
            //Login ? email = prueba4@example.com & password=prueba4
            {
                method: "GET",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                //body: JSON.stringify(DatosAlquilado)
            });
        const Rpta = await Respuesta.json();
        //let passwordDB = Rpta.contraseña;
        //alert("Error al intentar sesion, vuelve a intentarlo");
        if (Rpta) {
            location.replace("http://localhost:60277/Paginas/Login.html");
        }
    } catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
        alert(error);
    }
}