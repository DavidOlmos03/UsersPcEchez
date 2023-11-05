async function login() {
    try {
        const Respuesta = await fetch("http://localhost:60006/api/Login,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(DatosAlquilado)
            });
    } catch (error) {
        //Se presenta la respuesta en el div mensaje
        $("#dvMensaje").html(error);
    }
}