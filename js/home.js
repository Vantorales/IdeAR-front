document.addEventListener('DOMContentLoaded', async () => {

    getPublicaciones();
});


const getPublicaciones = async() => {

    let containerPublicaciones = document.querySelector("#containerPublicaciones");
    const url = "http://localhost:8080/api/obtenerPublicaciones";

    let responseJson = await sendDataGet(url);
    console.log(responseJson);
    let publicaciones = responseJson.publicacion;



    publicaciones.forEach(publicacion => {

        let bodyPublicacion = `<article class="proInd">
        <h1>
            ${publicacion.titulo}
        </h1>
        <p id="idPublicacion" style="display:none">${publicacion._id}</p>
        <p class="limitado">
            ${publicacion.contenido}
        </p>
        <div class="projectData">
            por <b>${publicacion.usuario.nickname} </b>| ${publicacion.fechaCreacion}
            <div class="rateComment reading">
                <span onclick="irPublicacion(this)">Continuar leyendo</span>
            </div>
        </div>

    </article>` ;

    containerPublicaciones.innerHTML += bodyPublicacion;
        
    });

}

const irPublicacion = async( target )=>{
    let id = target.parentNode.parentNode.parentNode.childNodes[3].innerText;
    // const url = `http://localhost:8080/api/api/obtenerPublicacion/${id}`;
    // let responseJson = await sendDataGet(url);
    // let publicaciones = responseJson.publicacion;
    let info = {
        id
    }

    localStorage.setItem("infoPubli",JSON.stringify(info));
    // sessionStorage.setItem("idPublicacion", id);
    location.href = 'postview.html';
    

}
const exit = () =>{
        console.log("salio");
        let UsuarioInit = {
            logout:false,
            name:"",
        };
        localStorage.setItem("UserInit" ,JSON.stringify(UsuarioInit));
        localStorage.removeItem("infoPubli");
        location.href = "index.html";

    }