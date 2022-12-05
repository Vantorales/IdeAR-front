let dataPublicacion;
let titulo;
let contenido;
let fechaCreacion;

document.addEventListener('DOMContentLoaded', async () => {

    let id = sessionStorage.getItem("idPublicacion");
    sessionStorage.removeItem("idPublicacion");


    const data = {
        id
    }

    const url = "http://localhost:8080/api/obtenerPublicacion";

    dataPublicacion = await sendData(url, data, "POST");

    const titulo = document.querySelector("#tituloPublicacion");
    const contenido = document.querySelector("#contenido");
    const nickname = document.querySelector("#nicknamePublicacion");
    const fechaCreacion =  document.querySelector("#fechaCreacion");


    const editTitulo = document.querySelector("#editTitulo");
    const editContenido = document.querySelector("#editContenido");


    titulo.innerText = dataPublicacion.publicacion[0].titulo ? dataPublicacion.publicacion[0].titulo: "";
    contenido.innerText = dataPublicacion.publicacion[0].contenido ? dataPublicacion.publicacion[0].contenido: "";
    fechaCreacion.innerText = dataPublicacion.publicacion[0].fechaCreacion ? dataPublicacion.publicacion[0].fechaCreacion: "";
    nickname.innerText = dataPublicacion.publicacion[0].usuario.nickname ? dataPublicacion.publicacion[0].usuario.nickname: "";
   
    editTitulo.value = dataPublicacion.publicacion[0].titulo ? dataPublicacion.publicacion[0].titulo: "";
    editContenido.value = dataPublicacion.publicacion[0].contenido ? dataPublicacion.publicacion[0].contenido: "";

    datosUsuario();
    cargarComentarios();

});


const editarPublicacion = () => {

    let datosPublicacion; 

    const titulo = document.querySelector("#editTitulo").value;
    const contenido = document.querySelector("#editContenido").value;

    const data = {
        titulo,
        contenido,
        id: "638bd063534c1a6e925db3a8"
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

