// async function Cart() {
//     var carrito = localStorage.getItem('carrito')
//     var productos = carrito.split(",")
//     var containerproductos = document.getElementById('productosContainer')
//     var preciofinal;
//     console.log(productos);
//     var id_productos;
//     for (let index = 0; index < productos.length; index++) {
//         console.log(productos[index])

//     }
//     for (let index = 0; index < productos.length; index++) {


// }
async function crearPedido() {
    await fetch("http://localhost:4000/API/pedidos/crear", {
        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "id_cliente": localStorage.getItem('usuario'),
            "metodo_pago": "Credit Card"

        }, { mode: 'no-cors' })
    })

    console.log(localStorage.getItem('usuario'))

}
var precioTotal=0
async function crearInfoped() {
    var carrito = localStorage.getItem('carrito')
    var productos = carrito.split(",")
   
    var containerproductos = document.getElementById('productosContainer')
    var id_productos
    var pedidos = await conexioncarrito("pedidos/buscar/user?id=" + localStorage.getItem('usuario'))
    for (let index = 0; index < productos.length; index++) {
        await fetch("http://localhost:4000/API/infopedido/crear", {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id_producto": productos[index],
                "id_pedido": pedidos[0]["id_pedido"]

            }, { mode: 'no-cors' })
        })

        id_productos = await conexioncarrito("producto/buscar?id=" + productos[index])
        console.log(id_productos)
        containerproductos.innerHTML += `
    <div class="producto">
    <h3>${id_productos[0]["nombre_prod"]}</h3>
    <p>${id_productos[0]["descripcion"]}</p>
    <p>Precio: ${id_productos[0]["precio"]}</p>
    <button class="boton" onclick="eliminarProductos(${id_productos[0]["id_producto"]})">Eliminar</button>
    </div>
    `
        precioTotal += parseFloat(id_productos[0]["precio"]);


        // Mostrar precio total
       
    }
    containerproductos.innerHTML += `<p>Precio total: ${precioTotal}</p>`;
}

function eliminarProductos(id) {
    
    var carrito = localStorage.getItem('carrito')
    var productos = carrito.split(",")
    var cont = 0
    localStorage.removeItem('carritoTemporal')


    for (let index = 0; index < productos.length; index++) {
        if (productos[index] == id && cont == 0) {
            cont=cont +1;
            console.log(productos[index] + " para eliminar")
            precioTotal -= parseFloat(productos[index]["precio"]);

        } else {
            if (localStorage.getItem('carritoTemporal') != null) {
                var cont = localStorage.getItem('carritoTemporal')
                cont += ',' + productos[index];
                localStorage.setItem('carritoTemporal', cont)
            } else {
                localStorage.setItem('carritoTemporal', productos[index])
            }
        }


    }

    if (localStorage.getItem('carritoTemporal') == null) {
        localStorage.removeItem('carrito')
    } else {
        localStorage.setItem('carrito', localStorage.getItem('carritoTemporal'));

    }
    var precioTotalElement = document.getElementById('precioTotal');
    precioTotalElement.innerHTML = `Precio total: ${precioTotal}`;
    location.reload();

}
document.addEventListener('DOMContentLoaded', async () => {
    await crearInfoped();
});
