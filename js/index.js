const username = document.getElementById('username');
const password = document.getElementById('psw');
const passwordRepeat = document.getElementById('psw-repeat');
const errors = document.querySelectorAll('.error');
const usernameIn = document.getElementById('username-in');
const passwordIn = document.getElementById('psw-in');
const errorsIn = document.querySelectorAll('.error-in');

function closeModel(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showSignUp(event) {
    document.getElementById('sign-up').style.display = 'block';
}

function closeSignUp(event) {
    document.getElementById('sign-up').style.display = 'none';
}

// Get the modal
const modal = document.getElementById('sign-up');

// When the user clicks anywhere outside of the modal, close it
window.onclick = closeModel;

//sign in
function showLogin(event) {
    document.getElementById('sign-in').style.display = 'block';
}

function closeSignIn(event) {
    document.getElementById('sign-in').style.display = 'none';
}

function login(event) {
    event.preventDefault();
    errorsIn[0].textContent = "";
    errorsIn[1].textContent = "";
    const users = JSON.parse(localStorage.getItem('allUsers')) ?? {};
    if (users[usernameIn.value] === undefined) {
        errorsIn[0].textContent = "user does not exists";
        return;
    }
    if (users[usernameIn.value].password === passwordIn.value)
        window.location = "http://127.0.0.1:5500/pages/game.html";//ניתוב לעמוד המשחק
    else
        {
            errorsIn[1].textContent = "wrong password";
            return;
        }
}



function register(event) {
    event.preventDefault();
    errors[0].textContent = "";
    errors[1].textContent = "";
    errors[2].textContent = "";
    if (password.value !== passwordRepeat.value) {
        errors[2].textContent = "the password is not the same";
        return;
    }
    const users = JSON.parse(localStorage.getItem('allUsers')) ?? {};
    if (users[username.value] !== undefined) {
        errors[0].textContent = "user exists";
        return;
    }
    const user = {
        username: username.value,
        password: password.value,
        passwordRepeat: passwordRepeat.value,
        bestScore: 0
    }

    users[user.username] = user;

    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('allUsers', JSON.stringify(users));
    alert("the registering succeeded")
    window.location = "http://127.0.0.1:5500/pages/game.html";//ניתוב לעמוד המשחק
    // const form = event.target;
    // console.log(form);
    // let x = new FormData(form);
    // console.log(x);


    
    mi
}