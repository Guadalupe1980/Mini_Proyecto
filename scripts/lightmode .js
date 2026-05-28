
/* Accion de cambio a modo claro */
let buttonLight = document.querySelector("#btnLightMode");
let documentoPrincipal = document.querySelector("html")

function cambiarModo(){
    documentoPrincipal.classList.toggle("light")
}

buttonLight.addEventListener("click", cambiarModo)




