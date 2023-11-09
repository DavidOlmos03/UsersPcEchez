jQuery(function () {
    //Registrar los botones para responder al evento click
    $("#dvMenu").load("../Paginas/Menu.html")
    //Registrar los botones para responder al evento click
    $("#btnInsertar").on("click", function () {     
        EjecutarComandos("POST");
    });
});
async function EjecutarComandos(Comando) {
    //Capturo los datos de entrada
    let Email = $("#txtEmail").val();
    let Password = $("#txtPassword").val();
    let Password2 = $("#txtPassword2").val();

    if (Password == Password2) {
        //Defino el json
        let DatosUsers = {
            correo: Email,
            contraseña: Password
        }

        //Invocamos el servicio a través del fetch, usando el método fetch de javascript
        try {
            const Respuesta = await fetch("http://localhost:60006/api/Login",
                {
                    method: Comando,
                    mode: "cors",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(DatosUsers)
                });
            alert("El usuario con email: \n" + Email + "\nSe agrego correctamente");
            const Rpta = await Respuesta.json();
            //Se presenta la respuesta en el div mensaje
            $("#dvMensaje").html(Rpta);
        }
        catch (error) {
            //Se presenta la respuesta en el div mensaje
            $("#dvMensaje").html(error);
        }
    } else {
        alert("Passwords don't match, please try again");
    }
   
}