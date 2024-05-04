let headerBakgrounds = document.querySelectorAll(".sliderImagenes");
let imageIndex = 0;

function cambiaImagen(){
    //Elimina .mostrar de la imagen actual
    headerBakgrounds[imageIndex].classList.remove("mostrar");

    //Incrementar valor del index en uno
    imageIndex++;

    //Si el último elemento es mayor que el resto de elementos, ponerlo en 0.
    if (imageIndex >= headerBakgrounds.length) {
        imageIndex = 0;
    }

    //Añadir la clase .mostrar a la siguiente imagen
    headerBakgrounds[imageIndex].classList.add("mostrar");
}

setInterval(cambiaImagen, 4500);