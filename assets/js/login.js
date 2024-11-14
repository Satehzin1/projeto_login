// SHOW HIDDEN - PASSWORD
const showHiddenPassword = () => {
    const input = document.getElementById("password")
    const iconEye = document.getElementById("login-eye")
    const inputRepeat = document.getElementById("password_confirma")
    const iconEyeConfirm = document.getElementById("login-eye2")

    iconEye.addEventListener("click", () => {
        // change password to text
        if (input.type === 'password') {
            // change password to text
            input.type = 'text';

            // icon change
            iconEye.classList.add("ri-eye-line");
            iconEye.classList.remove("ri-eye-off-line");    
        } else {
            // change text to a password
            input.type = 'password';
            // icon change
            iconEye.classList.add("ri-eye-off-line");
        }
    });
    
    iconEyeConfirm.addEventListener('click', () => {
        if (inputRepeat.type === 'password') {
            // change password to text
            inputRepeat.type = 'text';

            iconEyeConfirm.classList.add("ri-eye-line");
            iconEyeConfirm.classList.remove("ri-eye-off-line");
        } else {
            // change text to password
            inputRepeat.type = 'password';

            iconEyeConfirm.classList.add("ri-eye-off-line");
        }
    });
};

showHiddenPassword();

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

            alert(`tentativa ${tentativas}/3`)

            if (tentativas === 3) {
                
            }
        }

    };
});