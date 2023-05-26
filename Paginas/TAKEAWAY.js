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
            <img src="${productos[index]["photo"]}" class ="fotoprod">
            <h3>${productos[index]["nombre_prod"]}</h3>
            <p>${productos[index]["descripcion"]}</p>
            <p>Precio: ${productos[index]["precio"]}</p>
            <button type="Submit" class="addbutton" onclick="agregarCarrito(${productos[index]["id_producto"]})">ADD</button>
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
            <img src="${productos[index]["photo"]}" class ="fotoprod">
            <h3>${productos[index]["nombre_prod"]}</h3>
            <p>${productos[index]["descripcion"]}</p>
            <p>Precio: ${productos[index]["precio"]}</p>
            <button type="Submit" class="addbutton" onclick="agregarCarrito(${productos[index]["id_producto"]})">ADD</button>
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
            <img src="${productos[index]["photo"]}" class ="fotoprod">
            <h3>${productos[index]["nombre_prod"]}</h3>
            <p>${productos[index]["descripcion"]}</p>
            <p>Precio: ${productos[index]["precio"]}</p>
            <button type="Submit" class="addbutton" onclick="agregarCarrito(${productos[index]["id_producto"]})">ADD</button>
            </div>
            `
            contreposteria++;
        }
        
    }   
   
}
function addtocart(productId) {
    var carrito = localStorage.setItem('id',JSON.stringify(productos));
    cartItems.push(productId);

}
function agregarCarrito(id_prod){
    if (localStorage.getItem('carrito')!= null) {
        var cont = localStorage.getItem('carrito')
        cont += ','+ id_prod;
        localStorage.setItem('carrito',cont) 
    }else{
        localStorage.setItem('carrito',id_prod)
    }
    
}

            document.addEventListener('DOMContentLoaded', () =>{
                fetchProductosAway();
            });


















