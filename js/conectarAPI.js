async function listaProductos() {
    const conexion = await fetch("http://localhost:3002/productos", {
        method: "GET",
        headers: {
            "Content-type": "application/json"
        }
    });

    const conexionConvertida = await conexion.json();
    
    return conexionConvertida;
}

async function crearProducto(id, precio, nombre, imagen) {
    const conexion = await fetch("http://localhost:3002/productos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            id:id,
            precio: precio,
            nombre: nombre,
            imagen: imagen
        })
    })

    const conexionConvertida = await conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) {
    try {
    console.log(id)
    const conexion = await fetch(`http://localhost:3002/productos/${id}`, {
     
        method: "DELETE",
        
    });
    if (!conexion.ok) {
        const errorText = await conexion.text();
        throw new Error(`No fue posible eliminar el producto: ${errorText}`);
    }

    return "Producto eliminado con éxito";
} catch (error) {
    console.error("Error al eliminar el producto:", error);
    throw error;
} 
}

export const conectaAPI = {
    listaProductos, crearProducto, eliminarProducto
}
