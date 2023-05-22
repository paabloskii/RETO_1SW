document.getElementById('login-form').addEventListener('submit', async function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        'correo_electronico': email,
        'contraseña': password
    };



    await conexionLogin("cliente/buscarCorreo?correo=" + email);
});

function botonesLogin(){
    if (localStorage.getItem("login") == "true") {
        document.getElementById('sign_in').style.display = 'none';
        document.getElementById('sign_up').style.display = 'none';
        document.querySelector('.dropdown').style.display = 'block';
    }
}


async function conexion(ruta) {
    const url = "http://localhost:4000/API/" + ruta;
    const resul = await fetch(url, { method: 'GET' });
    const jsonData = await resul.json();
    console.log(jsonData);
    return jsonData;
}

async function conexionlogin(ruta){
    const url = "http://localhost:4000/API/" + ruta;
    const resul = await fetch(url, { method: 'GET' });
    const jsonData = await resul.json();

    if (jsonData.length === 0 || jsonData[0]["contraseña"] !== document.getElementById('password').value) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    } else {
        location.replace("http://127.0.0.1:5500/FRONT/RETO_1SW/Paginas/MAINPAGE.html");
        
        localStorage.setItem("login","true");
    }

    console.log(jsonData);
    return jsonData;
}
