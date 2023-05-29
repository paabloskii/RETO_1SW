
async function registerUser() {
    const name = document.getElementById('name').value;
    const last_name = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;


    const data = {
        'nombre_cliente': name,
        'apellido_cliente': last_name,
        'correo_electronico': email,
        'contraseña': password


    };

    async function conexion(ruta) {
        const url = "http://localhost:4000/API/" + ruta;
        const resul = await fetch(url, { method: 'GET' });
        const jsonData = await resul.json();
        console.log(jsonData);
        return jsonData;
    }

    console.log(data);
    var emailexist = await conexion("cliente/buscarCorreo?correo=" + email);
    console.log(emailexist);
    if (emailexist.length == 0) {
        const url = "http://localhost:4000/API/cliente/crearLogin";
        console.log(email);
        console.log(password);
        const response = await fetch(url, {
            method: 'POST',

            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }, { mode: 'no-cors' });

        if (response.ok) {
            alert('Registro exitoso');
            location.replace("http://127.0.0.1:5500/FRONT/RETO_1SW/Paginas/SGIN.html");

       
         
        } else {
            document.getElementById('error-message').style.display = 'block';
        }
    } else {
        document.getElementById('name').value = '';
        document.getElementById('last_name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    }
}
