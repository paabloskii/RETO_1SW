
 function fetchProductosMenu() {
      fetch('http://localhost:4000/API/producto/consultar')
        .then(response => response.json())
        .then(data => {
          const bebidasContainer = document.getElementById('bebidasContainer');
          const saladosContainer = document.getElementById('saladosContainer');
          const reposteriaContainer = document.getElementById('reposteriaContainer');

          bebidasContainer.innerHTML = '';
          saladosContainer.innerHTML = '';
          reposteriaContainer.innerHTML = '';

          const categorias = ['Bebida', 'Salado', 'Repostería'];

          categorias.forEach(categoria => {
            const productosCategoria = data.filter(producto => producto.categoria === categoria);
            if (productosCategoria.length > 0) {
              const categoriaTitle = document.createElement('h2');
              categoriaTitle.textContent = categoria;

              const productosLista = document.createElement('ul');
              productosCategoria.forEach(producto => {
                const productoItem = document.createElement('li');
                productoItem.innerHTML = `
                <img src="${producto.photo}">
                  <h3>${producto.nombre_prod}</h3>
                  <p>${producto.descripcion}</p>
                  <p>Precio: ${producto.precio}</p>
                `;
                productosLista.appendChild(productoItem);
              });

              if (categoria === 'Bebida') {
             
                bebidasContainer.appendChild(productosLista);
              } else if (categoria === 'Salado') {
            
                saladosContainer.appendChild(productosLista);
              } else if (categoria === 'Repostería') {
              
                reposteriaContainer.appendChild(productosLista);
              }
            }
          });
        })
        .catch(error => {
          console.error('Error:', error);
        });
    }

    document.addEventListener('DOMContentLoaded', fetchProductosMenu);