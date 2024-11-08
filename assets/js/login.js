// SHOW HIDDEN - PASSWORD
const showHiddenPassword = () => {
    const input = document.getElementById("login-pass")
    const iconEye = document.getElementById("login-eye")
    const inputRepeat = document.getElementById("login-repeat")
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