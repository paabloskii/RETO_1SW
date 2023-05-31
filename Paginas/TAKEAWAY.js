async function fetchProductosAway() {
    var productos = await conexion("producto/consultar")
    console.log(productos);
    var containerBebidas = document.getElementById("bebidasContainer")
    var contbebidas = 0;
    var contsalados = 0;
    var contreposteria = 0;
    for (let index = 0; index < productos.length; index++) {
        if (productos[index]["categoria"] == "Bebida" && contbebidas < 3) {
            containerBebidas.innerHTML += `
            <div class="producto">
            <div class="negro">
            <img src="../IMAGENES/like.png" class="like">
            <img src="${productos[index]["photo"]}" class ="fotoprod">
            </div>
            <div class="blanco">
            <h3 class="nombre_prod">${productos[index]["nombre_prod"]}</h3>
            <p class="desc">${productos[index]["descripcion"]}</p>
            <p class="precio">Precio: ${productos[index]["precio"]}</p>
            <button type="Submit" class="addbutton" onclick="agregarCarrito(${productos[index]["id_producto"]})">ADD</button>
            </div>
            </div>
            `
            contbebidas++;
        }

    }
    var containerSalados = document.getElementById("saladosContainer")
    for (let index = 0; index < productos.length; index++) {
        if (productos[index]["categoria"] == "Salado" && contsalados < 3) {
            containerSalados.innerHTML += `
            <div class="producto">
            <div class="negro">
            <img src="../IMAGENES/like.png" class="like">
            <img src="${productos[index]["photo"]}" class ="fotoprod">
            </div>
            <div class="blanco">
            <h3 class="nombre_prod">${productos[index]["nombre_prod"]}</h3>
            <p class="desc">${productos[index]["descripcion"]}</p>
            <p class="precio">Precio: ${productos[index]["precio"]}</p>
            <button type="Submit" class="addbutton" onclick="agregarCarrito(${productos[index]["id_producto"]})">ADD</button>
            </div>
            </div>
            `
            contsalados++;
        }
    }
    var containerReposteria = document.getElementById("reposteriaContainer")
    for (let index = 0; index < productos.length; index++) {
        if (productos[index]["categoria"] == "Repostería" && contreposteria < 3) {
            containerReposteria.innerHTML += `
            <div class="producto">
            <div class="negro">
            <img src="../IMAGENES/like.png" class="like">
            <img src="${productos[index]["photo"]}" class ="fotoprod">
            </div>
            <div class="blanco">
            <h3 class="nombre_prod">${productos[index]["nombre_prod"]}</h3>
            <p class="desc">${productos[index]["descripcion"]}</p>
            <p class="precio">Precio: ${productos[index]["precio"]}</p>
            <button type="Submit" class="addbutton" onclick="agregarCarrito(${productos[index]["id_producto"]})">ADD</button>
            </div>
            </div>
            `
            contreposteria++;
        }

    }

}

function addtocart(productId) {
    var carrito = localStorage.setItem('id', JSON.stringify(productos));
    cartItems.push(productId);

}
function agregarCarrito(id_prod) {
    if (localStorage.getItem('login') === 'true') {
        if (localStorage.getItem('carrito') != null) {
            var cont = localStorage.getItem('carrito')
            cont += ',' + id_prod;
            localStorage.setItem('carrito', cont)
            alert("Product Added")
        } else {
            localStorage.setItem('carrito', id_prod)
            alert("Product Added")
        }
    } else {
        window.alert("Sign In first")
    }

}
 function pruebaNombre() {
var prueba= document.getElementById('name').value;
localStorage.setItem('Nombre',prueba)

var frase= document.getElementById('pruebalabel')
frase.innerHTML = `
<p id="Nombre">Hola  ${localStorage.getItem('Nombre')}</p>
`
 }
document.addEventListener('DOMContentLoaded', () => {
    fetchProductosAway();
});


















