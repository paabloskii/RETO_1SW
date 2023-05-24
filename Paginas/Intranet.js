let crearProductoForm

async function crearProducto(){
    crearProductoForm = document.getElementById('crearProductoForm');
    crearProductoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const nombre = crearProductoForm.nombre.value;
        const descripcion = crearProductoForm.descripcion.value;
        const precio = crearProductoForm.precio.value;
        const categoria = crearProductoForm.categoria.value;

        fetch('http://localhost:4000/API/producto/crear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre_prod: nombre,
                descripcion: descripcion,
                precio: precio,
                categoria: categoria
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {

                    crearProductoForm.reset();

                    showMessage('success-message', 'Producto creado exitosamente');
                    
                    fetchProductos();
                    location.reload();
                } else {

                    showMessage('error-message', 'Error al crear el producto');
                }
            })
            .catch(error => {
                console.error('Error:', error);

                showMessage('error-message', 'Error al crear el producto');
            });
    });
    location.reload();
}



function showMessage(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
}


function fetchProductos() {
    fetch('http://localhost:4000/API/producto/consultar')
        .then(response => response.json())
        .then(data => {
            const productosTable = document.getElementById('productosTable');
            const tbody = productosTable.getElementsByTagName('tbody')[0];
            tbody.innerHTML = '';

            data.forEach(producto => {
                const row = document.createElement('tr');
                const nombreCell = document.createElement('td');
                const descripcionCell = document.createElement('td');
                const precioCell = document.createElement('td');
                const categoriaCell = document.createElement('td');
                const accionesCell = document.createElement('td');

                nombreCell.textContent = producto.nombre_prod;
                descripcionCell.textContent = producto.descripcion;
                precioCell.textContent = producto.precio;
                categoriaCell.textContent = producto.categoria;

                const eliminarButton = document.createElement('button');
                eliminarButton.textContent = 'Eliminar';
                eliminarButton.addEventListener('click', function () {
                    eliminarProducto(producto.id_producto);
                });

                accionesCell.appendChild(eliminarButton);

                row.appendChild(nombreCell);
                row.appendChild(descripcionCell);
                row.appendChild(precioCell);
                row.appendChild(categoriaCell);
                row.appendChild(accionesCell);

                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

// Función para eliminar un producto
function eliminarProducto(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este producto?')) {
        fetch('http://localhost:4000/API/producto/eliminar', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id_producto: id
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Mostrar mensaje de éxito
                    showMessage('success-message', 'Producto eliminado exitosamente');
                    // Actualizar la tabla de productos
                    fetchProductos();
                } else {
                    // Mostrar mensaje de error
                    showMessage('error-message', 'Error al eliminar el producto');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                // Mostrar mensaje de error
                showMessage('error-message', 'Error al eliminar el producto');
            });
   location.reload(); 
        }
}

// Obtener y mostrar los productos al cargar la página
fetchProductos();