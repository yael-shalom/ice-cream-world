const username = document.getElementById('username');
const password = document.getElementById('psw');
const passwordRepeat = document.getElementById('psw-repeat');
const errors = document.querySelectorAll('.error');
const usernameIn = document.getElementById('username-in');
const passwordIn = document.getElementById('psw-in');
const errorsIn = document.querySelectorAll('.error-in');

homePage();

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
    if (users[usernameIn.value].password === passwordIn.value) {
        sessionStorage.setItem('currentUser', JSON.stringify(users[usernameIn.value]));
        localStorage.setItem('currentUser', JSON.stringify(users[usernameIn.value]));
        closeSignIn()
        window.open('./our-games.html', '_self');
    }
    else {
        errorsIn[1].textContent = "error";
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
        bestScore: 0,
        countGames: 0,
        countWins: 0
    }

    users[user.username] = user;

    localStorage.setItem('currentUser', JSON.stringify(user));
    sessionStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('allUsers', JSON.stringify(users));
    closeSignUp();
    window.open('./our-games.html', '_self');
}

//פונקציההמארגנת את דף הבית
function homePage() {
    const body = document.querySelector('body');
    const grid = document.querySelector('.grid-container');
    const firstCol = document.querySelector('.oneColum');
    const secondCol = document.querySelector('.towColum');
    const game = document.querySelectorAll('.game');
    const title = document.querySelector('.titleHome');
    const home = document.querySelector('.home');
    const buttons = document.querySelector('.containBtn');
    home.style.display = 'flex';
    title.style.display = 'block';
    body.classList.add('body-home')
    grid.classList.add('grid-home');
    firstCol.classList.add('first-column');
    secondCol.classList.add('second-column');
    grid.classList.remove('body');
    grid.classList.remove('grid-container');
    game.forEach(function (div) {
        div.classList.add('game');
    });
    title.classList.add('title');
}

function changeImg(event)
{
    event.currentTarget.src = `../assets/images/noa/1x/${event.currentTarget.id}.png`;
}

function firstImg(event)
{
    current = event.currentTarget;
    current.src = `../assets/images/noa/1x/${current.id.substring(0, current.id.length - 1)}.png`;
}