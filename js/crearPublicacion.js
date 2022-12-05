const crearPublicacion = () => {

    const titulo = document.querySelector("#titulo").value;
    const contenido = document.querySelector("#contenido").value;
    let yourDate = new Date()
    yourDate = yourDate.toISOString().split('T')[0]
    

    const userInit = JSON.parse(localStorage.getItem("UserInit"));
    const { nickname } = userInit;
    const data = {
        nickname,
        titulo,
        contenido,
        fechaCreacion: yourDate
    }
    if(validaciones(data)){
        sendData(data);
    }else{
        alert("Completar campos faltantes");
    }

}

const validaciones = (data) => {
    const { titulo, contenido } = data;

    if(titulo == null || titulo == undefined || titulo == ""){
        return false;
    }else if(contenido == null || contenido == undefined || contenido == ""){
        return false;
    }
    return true;
}

const sendData = async(data) => {
    const url = "http://localhost:8080/api/nuevaPublicacion";

    const myInit = {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',          
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    }

    try {
        const response = await fetch(url, myInit);
        const responseJSON = await response.json();
        redirectHome(responseJSON);


        console.log(responseJSON);

    } catch(error){
        console.log(error);
    }}

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
