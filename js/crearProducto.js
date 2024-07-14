import { conectaAPI } from "./conectarAPI.js";

const formulario = document.querySelector("[data-formulario]");

//validaciones
function generateId() {
    return Date.now().toString();
}

console.log(generateId()); // 1627748550657
console.log(generateId()); // 1627748550658 (un milisegundo después)



async function crearProducto(evento) {
    evento.preventDefault();
    const precio = document.querySelector("[data-precio]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const imagen = document.querySelector("[data-imagen]").value;
   

    await conectaAPI.crearProducto(generateId(), precio, nombre, imagen)

    window.location.href = "pages/envio-concluido.html"
}

formulario, addEventListener("submit", evento => crearProducto(evento));