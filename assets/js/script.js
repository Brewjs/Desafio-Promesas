//Crear una función asíncrona que contenga la URL en una variable.

const albunes = async () => {

    const url = 'https://jsonplaceholder.typicode.com/photos';

    try {
        const response = await fetch(url); //metodo try/catch para unirse a url
        const datos = await response.json();
        datos.forEach(elemento => {
            if (elemento.id <= 20) {
                console.log(elemento.title); //Se imprimen por consola los primeros 20 titulos
            }
        });
    } catch (err) { //catch para atrapar errores
        console.log(err);
    }
}

//Se debe crear otra función que retorne una promesa, la cual debe tardar tres (3)
//segundos en resolver la promesa para retornar el mensaje: “Información Enviada”.

const mensajePromesa = () => {

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Información Enviada :)')
        }, 3000)
    })
}

//Esta promesa debe ser recibida por una función asíncrona, que mediante el uso del
//await reciba directamente el valor y lo muestra por la consola del navegador web.

const recibirValor = async () => {

    albunes();
    const mensaje = await mensajePromesa();
    console.log(mensaje)
}

recibirValor();
