let dataPublicacion;
let titulo;
let contenido;
let fechaCreacion;


document.addEventListener('DOMContentLoaded', async () => {

    const dataPublicacion = JSON.parse(localStorage.getItem("infoPubli"));
    let { id } = dataPublicacion;
    // localStorage.removeItem("infoPubli");


    const data = {
        id
    }

    const url = "http://localhost:8080/api/obtenerPublicacion";

    let infoPublicacionres = await sendData(url, data, "POST");

    const titulo = document.querySelector("#tituloPublicacion");
    const contenido = document.querySelector("#contenido");
    const nickname = document.querySelector("#nicknamePublicacion");
    const fechaCreacion =  document.querySelector("#fechaCreacion");
    const idpublicacionview =  document.querySelector("#idpublicacionview");


    const editTitulo = document.querySelector("#editTitulo");
    const editContenido = document.querySelector("#editContenido");

    idpublicacionview.innerText = id;
    titulo.innerText = infoPublicacionres.publicacion[0].titulo ? infoPublicacionres.publicacion[0].titulo: "";
    contenido.innerText = infoPublicacionres.publicacion[0].contenido ? infoPublicacionres.publicacion[0].contenido: "";
    fechaCreacion.innerText = infoPublicacionres.publicacion[0].fechaCreacion ? infoPublicacionres.publicacion[0].fechaCreacion: "";
    nickname.innerText = infoPublicacionres.publicacion[0].usuario.nickname ? infoPublicacionres.publicacion[0].usuario.nickname: "";
   
    editTitulo.value = infoPublicacionres.publicacion[0].titulo ? infoPublicacionres.publicacion[0].titulo: "";
    editContenido.value = infoPublicacionres.publicacion[0].contenido ? infoPublicacionres.publicacion[0].contenido: "";

    datosUsuario();
    cargarComentarios(id);

});

const editarPublicacion = () => {

    let datosPublicacion; 

    const titulo = document.querySelector("#editTitulo").value;
    const contenido = document.querySelector("#editContenido").value;
    const id = document.querySelector("#idpublicacionview").innerText;

    const data = {
        titulo,
        contenido,
        id
        }

    const url = "http://localhost:8080/api/editarPublicacion";
    sendData(url, data, "PUT");
    location.reload();

}

const sendData = async(url, data, method) => {
    const myInit = {
        method,
        mode: 'cors',
        cache: 'no-cache',          
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }

    try {
        const response = await fetch(url, myInit);
        const responseJSON = await response.json();
        console.log(responseJSON);
        return responseJSON;

    } catch(error){
        console.log(error);
    }
}

const datosUsuario = async() => {
    const userInit = JSON.parse(localStorage.getItem("UserInit"));
    const { nickname } = userInit;
    const data = {
        nickname
      }
    
      const url = "http://localhost:8080/api/obtenerUsuario";
      
       dataUser = await sendData(url, data, "POST");
      console.log(dataUser);

       //OBTENCION DE TAGS
      const nicknamePub = document.querySelector("#nickname") 
      const ubicacion = document.querySelector("#ubicacion");
      const areaInteres = document.querySelector("#areaInteres");
      const cantidadPublicaciones = document.querySelector("#publicaciones");
      const reputacion = document.querySelector("#reputacion");

nicknamePub.innerHTML = dataUser.usuario[0].nickname;
ubicacion.innerHTML = dataUser.usuario[0].ubicacion;
areaInteres.innerHTML = dataUser.usuario[0].areaInteres;
cantidadPublicaciones.innerHTML = dataUser.usuario[0].publicacion;
reputacion.innerHTML = dataUser.usuario[0].reputacion;
      

}

const openModal = document.querySelector('.hero__cta');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__close');

openModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.add('modal--show');
});

closeModal.addEventListener('click', (e)=>{
    e.preventDefault();
    modal.classList.remove('modal--show');
});

const openModalEliminar = document.querySelector('#eliminarPublicacion');
const modalEliminar = document.querySelector('#modalEliminar');
const closeModalEliminar = document.querySelector('#modalEliminarClose');

openModalEliminar.addEventListener('click', (e)=>{
    e.preventDefault();
    modalEliminar.classList.add('modal--show');
});

closeModalEliminar.addEventListener('click', (e)=>{
    e.preventDefault();
    modalEliminar.classList.remove('modal--show');
})

