let dataPublicacion;
let titulo;
let contenido;
let fechaCreacion;

document.addEventListener('DOMContentLoaded', async () => {

    const data = {
        id: "638bd063534c1a6e925db3a8"
    }

    const url = "http://localhost:8080/api/obtenerPublicacion";

    dataPublicacion = await sendData(url, data, "POST");

    const titulo = document.querySelector("#tituloPublicacion");
    const contenido = document.querySelector("#contenido");
    const fechaCreacion =  document.querySelector("#fechaCreacion");

    console.log(dataPublicacion);

    titulo.innerText = dataPublicacion.publicacion[0].titulo ? dataPublicacion.publicacion[0].titulo: "";
    contenido.innerText = dataPublicacion.publicacion[0].contenido ? dataPublicacion.publicacion[0].contenido: "";
    fechaCreacion.innerText = dataPublicacion.publicacion[0].fechaCreacion ? dataPublicacion.publicacion[0].fechaCreacion: "";
    nickname.innerText = dataPublicacion.publicacion[0].usuario.nickname ? dataPublicacion.publicacion[0].usuario.nickname: "";


});


const editarPublicacion = () => {

    let datosPublicacion; 

    const containerTitulo = document.querySelector("#containerTitulo");
    const contenido = document.querySelector("#contenido").value;
    const fechaCreacion =  document.querySelector("#fechaCreacion").value;

    const data = {
        titulo,
        contenido,
        fechaCreacion,
        usupublicacion
    }

    const url = "http://localhost:8080/api/editarPublicacion";
    sendData(url, data, "PUT");

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
