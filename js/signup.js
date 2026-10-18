
function validateEmail(){
    let email = document.getElementById("email").value;

    let emailError = document.getElementById("emailErrorMessage");

    if (email === "") {
        emailError.innerHTML = "Email is required";
    } else if (!email.includes("@") || !email.includes(".")) {
        emailError.innerHTML = "Enter a valid email address";
    } else {
        emailError.innerHTML = "";
    }

}

function validatePassword() {
    let password = document.getElementById("password").value;

    let passwordError = document.getElementById("passwordErrorMessage");

    if (password === "") {
        passwordError.innerHTML = "password is required"
    } else if (password.length < 8) {
        passwordError.innerHTML = "password must be 8 characters or more"
    } else{
        passwordError.innerHTML = "";
    }
}