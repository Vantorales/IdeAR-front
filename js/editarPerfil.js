let dataUser;
let nickname ;
let email;
let nombre;
let apellido;
let areaInteres;
let ubicacion;
let fechaNacimiento;
let github;
let paginaWeb;


   
document.addEventListener('DOMContentLoaded', async ()=> {
    const userInit = JSON.parse(localStorage.getItem("UserInit"));
    const { nickname } = userInit;
    const data = {
        nickname
    }

  const url = "http://localhost:8080/api/obtenerUsuario";
  
   dataUser = await sendData(url, data, "POST");

    const nicknameEditProfile = document.querySelector("#nickname");
    const email = document.querySelector("#email");
    const nombre = document.querySelector("#nombre");
    const apellido = document.querySelector("#apellido");
    const areaInteres = document.querySelector("#areaInteres");
    const ubicacion = document.querySelector("#ubicacion");
    const fechaNacimiento = document.querySelector("#fechaNacimiento");
    const github = document.querySelector("#github");
    const paginaWeb = document.querySelector("#paginaWeb");

    nicknameEditProfile.value = dataUser.usuario[0].nickname ? dataUser.usuario[0].nickname: "";
    email.value = dataUser.usuario[0].email ? dataUser.usuario[0].email: "";
    nombre.value = dataUser.usuario[0].nombre ? dataUser.usuario[0].nombre: "";
    apellido.value = dataUser.usuario[0].apellido ? dataUser.usuario[0].apellido: "";
    areaInteres.value = dataUser.usuario[0].areaInteres ? dataUser.usuario[0].areaInteres: "";
    ubicacion.value = dataUser.usuario[0].ubicacion ? dataUser.usuario[0].ubicacion: "";
    fechaNacimiento.value = dataUser.usuario[0].fechaNacimiento ? dataUser.usuario[0].fechaNacimiento: "";
    github.value = dataUser.usuario[0].github ? dataUser.usuario[0].github: "";
    paginaWeb.value = dataUser.usuario[0].paginaWeb ? dataUser.usuario[0].paginaWeb : "";

  
});



const editarPerfil = () => {


    let datosUsuario;

    const nickname = document.querySelector("#nickname").value;
    const email = document.querySelector("#email").value;
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const areaInteres = document.querySelector("#areaInteres").value;
    const ubicacion = document.querySelector("#ubicacion").value;
    const fechaNacimiento = document.querySelector("#fechaNacimiento").value;
    const github = document.querySelector("#github").value;
    const paginaWeb = document.querySelector("#paginaWeb").value;


    const data = {
        nickname,
        email,
        nombre,
        apellido,
        areaInteres,
        ubicacion,
        fechaNacimiento,
        github,
        paginaWeb 
}
const url= "http://localhost:8080/api/editarUsuario";
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

