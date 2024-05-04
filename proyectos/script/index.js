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
        document.getElementById('contenido').style.display = "none";
    }

    function cerrar(){
        document.getElementById('navegador').style.display = 'none';
        document.getElementById('contenido').style.display = "flex";
   }

}



window.onload = botonesMenu();