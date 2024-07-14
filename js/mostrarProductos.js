import { conectaAPI } from "./conectarAPI.js";

const lista = document.querySelector("[data-lista]");

//validaciones

export default function construyeCard(id, precio, nombre, imagen) {
    const producto = document.createElement("li");
    producto.className = "card";

    producto.innerHTML = `<li >
                    <img class="img-product" src="${imagen}" alt="">
                    <p>${nombre}</p>
                    <div class="card-sub">
                    <p class="id">${id}</p>
                        <p>$${precio}</p>
                        
                        <img class="icon" src="img/trash.png" alt="" data-eliminar>
                    </div>
                </li>`

    const iconoEliminar = producto.querySelector('[data-eliminar]');
    iconoEliminar.addEventListener('click', async () => {
        try {
            await conectaAPI.eliminarProducto(id);
            producto.remove();
            console.log(`Producto con ID ${id} eliminado con éxito`);
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    });

    return producto;
}


async function listaProductos() {
    const listaAPI = await conectaAPI.listaProductos();
    listaAPI.forEach(element => lista.appendChild(construyeCard(element.id, element.precio, element.nombre, element.imagen)));
}

listaProductos();