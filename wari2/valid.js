//validate code for inputs

var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var Pass_error = document.getElementById('Pass_error');

username.addEventListener('input', username_Verify);
password.addEventListener('input', Pass_Verify);

function validated() {
    // Check if the entered username is 'sulathia' and password is '100523'
    if (username.value !== 'sulathia' || password.value !== '100523') {
        username.style.border = "1px solid red";
        password.style.border = "1px solid red";
        username_error.style.display = "block";
        Pass_error.style.display = "block";
        username.focus();
        return false;
    }

    return true;
}

function username_Verify() {
    // Reset the styles and errors when the username is being corrected
    if (username.value === 'sulathia') {
        username.style.border = "1px solid silver";
        username_error.style.display = "none";
    }
}

function Pass_Verify() {
    // Reset the styles and errors when the password is being corrected
    if (password.value === '100523') {
        password.style.border = "1px solid silver";
        Pass_error.style.display = "none";
    }
}

