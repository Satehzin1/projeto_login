const btnCadastrar = document.getElementById("cadastrar");
const form = document.querySelector("form");

form.addEventListener('submit', (event) => {
    
    event.preventDefault();

    const emailCadastro = document.getElementById("email").value; 
    const senhaCadastro = document.getElementById("password").value;
    const senhaConfirma = document.getElementById("password_confirma").value;

    if (senhaCadastro === senhaConfirma) {
        alert("cadastro realizado com sucesso");

        localStorage.setItem("emailCadastro", emailCadastro);
        localStorage.setItemO("senhaCadastro", senhaConfirma);

        window.location = "../../index.html"
        
    } else {
        alert("senhas não conferem!!!");
    }


});