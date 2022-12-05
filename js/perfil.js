document.addEventListener('DOMContentLoaded', async () => {
    datosUsuario()
  });



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
      const nicknamePub = document.querySelector("#nicknamePub") 
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