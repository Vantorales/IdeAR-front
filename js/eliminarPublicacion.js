const eliminarPublicacion = () => {

    const id = document.querySelector("#idpublicacionview").innerText;
    const data = {
        id
    }

    const url = "http://localhost:8080/api/eliminarPublicacion";
    sendData(url, data, "DELETE");
    location.href="home.html";

}

