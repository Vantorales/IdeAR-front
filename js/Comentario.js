const crearComentario = async() => {

    const comentario = document.querySelector("#contenidoComment").value;
    let fechaComentario = new Date()
    fechaComentario = fechaComentario.toISOString().split('T')[0]

    const data = {
        idUsuario : "638a2f711c8e1f01996914cf",
        idPublicacion : "638bd063534c1a6e925db3a8",
        contenido: comentario,
        fechaCreacion: fechaComentario
    }

    const url = "http://localhost:8080/api/nuevoComentario";
    const responseData = await sendData(url, data, "POST");


}


const cargarComentarios = async() => {

    let containerComentario = document.querySelector("#containerComentarios");
    const data = {
        idPublicacion:"638bd063534c1a6e925db3a8",
    }

    const url = "http://localhost:8080/api/obtenerComentarios";
    const responseData = await sendData(url, data, 'POST');
    const comentarios = responseData.comentarios;

    comentarios.forEach(comentario => {

        let bodyComentario = `<article class="commentPost">
        <section class="profileComment">
            <span class="info Username">${comentario.idUsuario.nickname}</span>
            <img src="https://via.placeholder.com/150x150" alt="">
            <span class="info Interest">${comentario.idUsuario.areaInteres}</span>
        </section>
        <section class="commentContent">
            <section class="commentData">
                <span class="dateComment">${comentario.fechaCreacion}</span>
                <section class="commentButtons">
                    <button type="button"><i class="fa-solid fa-trash"></i> Eliminar</button>
                </section>
            </section>
            <section class="content">${comentario.contenido}</section>
            <section class="rateCommentPost">★★★★★</div>
        </section>
        </article>`

        containerComentario.innerHTML += bodyComentario;
        
    });
    console.log(responseData);

}

const eliminarComentario = () => {

    
}
