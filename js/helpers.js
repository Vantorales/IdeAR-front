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

const sendDataGet = async(url) => {
    try {
        const response = await fetch(url);
        const responseJSON = await response.json();
        console.log(responseJSON);
        return responseJSON;

    } catch(error){
        console.log(error);
    }
}

