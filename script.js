const ANA = document.getElementById('enviar').addEventListener('click', function(){
    let pass = document.getElementById('pass').value;
    let enlace = document.getElementById('enlace');

    if (pass == 123){
        enlace.style.display = 'block';
    } else {
        alert('Contraseña incorecta perro')
    }
})

ANA()