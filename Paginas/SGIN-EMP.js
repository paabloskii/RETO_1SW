
async function conexionLogin(ruta){
    const url = "http://localhost:4000/API/" + ruta;
    const resul = await fetch(url, { method: 'GET' });
    const jsonData = await resul.json();

    if (jsonData.length === 0 || jsonData[0]["contraseña"] !== document.getElementById('password').value) {
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
    } else {
        location.replace("http://127.0.0.1:5500/FRONT/RETO_1SW/Paginas/Intranet.html");

        localStorage.setItem("loginempleado", "true");

    }
    

    console.log(jsonData);
    return jsonData;
}
