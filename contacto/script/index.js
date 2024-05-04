function botonesMenu(){
    //esta función sirve para dar funcionalidad a los botones de abrir y cerrar del menú de navegación
    let botonAbrir = document.getElementById("botonAbrir");
    let botonCerrar = document.getElementById("botonCerrar");

    botonAbrir.addEventListener("click", abrir); //al hacer click ejecuta la función abrir
    botonCerrar.addEventListener("click", cerrar); //al hacer click ejecuta la función cerrar

    function abrir(){
        //desplegará el menú de modo que ocupe toda la página
        document.getElementById('navegador').style.display = 'flex';
        document.getElementById('navegador').style.height = '100vh';
        document.getElementById('navegadorLista').style.display = 'flex';
    }

    function cerrar(){
        document.getElementById('navegador').style.display = 'none';
   }

}

function mailto(){
//creo una variable de tipo constante en la que guardo el selector del formulario
const formulario = document.querySelector('.formulario__contenedor__contenido__formulario');
const botonMailto = document.querySelector('.mailto');  

formulario.addEventListener('submit',handleSubmit); //añado el evento submit al formulario

function handleSubmit(event){ //creo el evento handleSubtmit para el formulario
    event.preventDefault(); //quito el evento que ocurre por defecto para asignarle el que quiero.
    const formulario = new FormData(this); //creo otra constante  que recibe como argumento nuestro formulario. 
                                            //This indica que el evento está enlazado al formulario. 
    botonMailto.setAttribute('href',`mailto:daniaranaudiovisual@gmail.com?subject=${formulario.get('nombre')}${formulario.get('email')}&body=${formulario.get('mensaje')}`);
    botonMailto.click();
}

}




window.onload = botonesMenu(), mailto();