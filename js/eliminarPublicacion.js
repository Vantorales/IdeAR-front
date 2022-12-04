const eliminarPublicacion = () => {

    const data = {
        id : "638b98a54ce090a20b1dbda2"
    }

    const url = "http://localhost:8080/api/eliminarPublicacion";
    sendData(url, data, "DELETE");

}

