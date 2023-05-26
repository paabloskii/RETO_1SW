async function Cart() {
    var carrito = localStorage.getItem('carrito')
    var productos = carrito.split(",")
    var containerproductos = document.getElementById('productosContainer')
    var preciofinal;
    console.log(productos);
    var id_productos;
    for (let index = 0; index < productos.length; index++) {
        console.log(productos[index])

    }
    for (let index = 0; index < productos.length; index++) {
        id_productos = await conexion("producto/buscar?id=" + productos[index])
        containerproductos.innerHTML += `
    <div class="producto">
    <h3>${id_productos[0]["nombre_prod"]}</h3>
    <p>${id_productos[0]["descripcion"]}</p>
    <p>Precio: ${id_productos[0]["precio"]}</p>
    <button class="boton" onclick="eliminarProducto(${id_productos[0]["id_producto"]})">Eliminar</button>
    </div>
    `
        preciofinal += id_productos[0]["precio"]
    }

}

async function eliminarProductos(id){
await conexionDelete("product/eliminar")
}
document.addEventListener('DOMContentLoaded', async () => {
    await Cart();
});
