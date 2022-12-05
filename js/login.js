document.addEventListener('DOMContentLoaded', ()=> {

    let userInit = {
        logout: false,
        nombre: ""
    }

    userInit = JSON.stringify(userInit);

    localStorage.setItem("UserInit", userInit)
});

const ingreso = () => {

    const email = document.querySelector("#email").value;
    const contraseña = document.querySelector("#contraseña").value;

    
    

    const data = {
        email,
        contraseña
    };

    const url = "http://localhost:8080/api/verificarUsuario";


    let responseJSON = sendData(url, data, "POST");
    redirectHome(responseJSON);

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
        
        return responseJSON;

    } catch(error){
        
    }
}

const redirectHome = async(data) =>{


    const {usuarioverificado, nickname} = await data; 
    console.log(data);    

    if(usuarioverificado === true){ 
        
      let userInit = {
        logout: usuarioverificado,
        nickname: nickname,
      };

      localStorage.setItem("UserInit",JSON.stringify(userInit));
      location.href = 'home.html';
      

    }else{
      
    }
       
    }