



function showMessage(elementId, message) {
    const element = document.getElementById(elementId);
    element.textContent = message;
    element.style.display = 'block';
}


function fetchClientes() {
    fetch('http://localhost:4000/API/cliente/consultar')
        .then(response => response.json())
        .then(data => {
            const clientesTable = document.getElementById('usuariosTable');
            const tbody = clientesTable.getElementsByTagName('tbody')[0];
            tbody.innerHTML = '';

            data.forEach(cliente => {
                const row = document.createElement('tr');
                const nombreCell = document.createElement('td');
                const apellidoCell = document.createElement('td');
                const correoCell = document.createElement('td');
                const contraseñaCell = document.createElement('td');
                const accionesCell = document.createElement('td');
            

                nombreCell.textContent = cliente.nombre_cliente;
                apellidoCell.textContent = cliente.apellido_cliente;
                correoCell.textContent = cliente.correo_electronico;
                contraseñaCell.textContent = cliente.contraseña;

                const eliminarButton = document.createElement('button');
                eliminarButton.textContent = 'Eliminar';
                eliminarButton.addEventListener('click', function () {
                    eliminarCliente(cliente.id_cliente);
                });

                accionesCell.appendChild(eliminarButton);

                row.appendChild(nombreCell);
                row.appendChild(apellidoCell);
                row.appendChild(correoCell);
                row.appendChild(contraseñaCell);
                row.appendChild(accionesCell);

                tbody.appendChild(row);
            });
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function eliminarCliente(id) {
    if (confirm('¿Estás seguro de que quieres eliminar este cliente?')) {
        fetch('http://localhost:4000/API/cliente/eliminar', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "id_cliente": id
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    showMessage('success-message', 'Cliente eliminado exitosamente');
                    fetchClientes();
                } else {
                    showMessage('error-message', 'Error al eliminar el cliente');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                showMessage('error-message', 'Error al eliminar el cliente');
            });
location.reload(); 
        }
}


fetchClientes();