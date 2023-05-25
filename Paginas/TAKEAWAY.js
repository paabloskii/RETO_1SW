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
            <p>Precio: ${productos[0]["precio"]}</p>
            <button type="Submit" class="addbutton">ADD</button>
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
            <p>Precio: ${productos[0]["precio"]}</p>
            <button type="Submit" class="addbutton">ADD</button>
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
            <p>Precio: ${productos[0]["precio"]}</p>
            <button type="Submit" class="addbutton">ADD</button>
            </div>
            `
            contreposteria++;
        }
        
    }   


    // fetch('http://localhost:4000/API/producto/consultar')
    //     .then(respone => Response.json())
    //     .then(data => {
    //         const bebidasContainer = document.getElementById('bebidas');
    //         const saladosContainer = document.getElementById('salados');
    //         const reposteriaContainer = document.getElementById('reposteria');

    //         bebidasContainer.innerHTML = '';
    //         saladosContainer.innerHTML = '';
    //         reposteriaContainer.innerHTML = '';

        
    //         categorias.forEach(categoria =>{
    //             const productosCategoria = data.filter(producto => producto.categoria === categoria);
    //             if (productosCategoria.length > 0) {

    //                 const productosFila = document.createElement('flex_container');
    //                 productosCategoria.forEach(producto => {
    //                     const productoItem = document.createElement('flex_item');
    //                     containerBebidas.innerhtml += `
    //                   <div class="producto">
    //                     <img src="${producto.photo}" class ="fotoprod">
    //                  <h3>${producto.nombre_prod}</h3>
    //                  <p>${producto.descripcion}</p>
    //                  <p>Precio: ${producto.precio}</p>
    //                  <button type="Submit" class="addbutton">ADD</button>
    //                 </div>
    //                 `;
    //                 productosFila.appendChild(productoItem);

    //                 });
    //                 if (categoria === 'Bebida') {

    //                     bebidasContainer.appendChild(productosFila);
    //                   } else if (categoria === 'Salado') {
            
    //                     saladosContainer.appendChild(productosFila);
    //                   } else if (categoria === 'Repostería') {
            
    //                     reposteriaContainer.appendChild(productosFila);
    //                   }
    //                 }
    //               });
    //             })
    //             .catch(error => {
    //               console.error('Error:', error);
    //             });
    //         }
}
            
            document.addEventListener('DOMContentLoaded', () =>{
                fetchProductosAway();
            });


















