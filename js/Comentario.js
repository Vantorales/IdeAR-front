const crearComentario = async() => {
    const idPublicacion = document.querySelector("#idpublicacionview").innerText;
    const comentario = document.querySelector("#contenidoComment").value;

    let fechaComentario = new Date()
    fechaComentario = fechaComentario.toISOString().split('T')[0]

    const userInit = JSON.parse(localStorage.getItem("UserInit"));
    const { nickname } = userInit;

    const data = {
        nickname,
        idPublicacion,
        contenido: comentario,
        fechaCreacion: fechaComentario
    }

    const url = "http://localhost:8080/api/nuevoComentario";
    const responseData = await sendData(url, data, "POST");
    location.reload();

    console.log("crearComentario: " + responseData);
    

}


const cargarComentarios = async(idPublicacion) => {

    let containerComentario = document.querySelector("#containerComentarios");
    const data = {
        idPublicacion
    }

    const url = "http://localhost:8080/api/obtenerComentarios";
    const responseData = await sendData(url, data, 'POST');
    const comentarios = responseData.comentarios;

    comentarios.forEach(comentario => {

        let bodyComentario = `<article class="commentPost">
        <section class="profileComment">
            <p style="display:none" id="idComentario">${comentario._id}</p>
            <span class="info Username">${comentario.idUsuario.nickname}</span>
            <img src="https://via.placeholder.com/150x150" alt="">
            <span class="info Interest">${comentario.idUsuario.areaInteres}</span>
        </section>
        <section class="commentContent">
            <section class="commentData">
                <span class="dateComment">${comentario.fechaCreacion}</span>
                <section class="commentButtons">
                    <button type="button" onclick="eliminarComentario(this)"><i class="fa-solid fa-trash"></i> Eliminar</button>
                </section>
            </section>
            <section class="content">
                ${comentario.contenido}
            </section>
        </section>
    </article>`

        containerComentario.innerHTML += bodyComentario;
        
    });
    console.log(responseData);

}

const redirectHome = async(data) =>{

    const {creacionCorrecta} = data; //trae la info de la petición
    console.log(creacionCorrecta);



    if(creacionCorrecta){ //verificamos que el usuario se encuentre registrado
        
      let userInit = {
        logout: creacionCorrecta,
      };

      localStorage.setItem("Publicacino enviada",JSON.stringify(userInit));
      location.href = 'home.html';
      

    }else{
      console.log("Publicacion fallida");
    }
    
    }

const eliminarComentario = (dataComentario) => {
    let idComentario = dataComentario.parentElement.parentElement.parentElement.parentNode.childNodes[1].childNodes[1].innerText;
    
    const data = {
        id: idComentario
    }

    const url = "http://localhost:8080/api/eliminarComentario";

    sendData(url, data, "DELETE");
    location.reload();

}
