let tentativas = 0;

document.querySelector("form").addEventListener("submit", (event) => {

    event.preventDefault();

    const emailLogin = document.getElementById("email").value;
    const senhaLogin = document.getElementById("password").value;

    // recuperar dados do local storage
    const email_cadastro = localStorage.getItem("emailCadastro");
    const senha_cadastro = localStorage.getItem("senhaCadastro");
    
    if ((emailLogin === email_cadastro) && (senhaLogin === senha_cadastro)){

        alert("Login realizado com sucesso!!!");

    } else {

        if (emailLogin !== email_cadastro) {
            alert("Email não cadastrado !!!");
        };
        
        if (senhaLogin !== senha_cadastro) {
            alert("Senha incorreta !!!")

            tentativas += 1;

            alert(`tentativa ${tentativas}/3`);

            if (tentativas === 3) {
                alert("Senha bloqueada por excesso de tentativas !!!");

                window.location = 'pages/recupera.html'
            };
        };

    };
});