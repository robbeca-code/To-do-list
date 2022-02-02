const loginForm = document.querySelector('#login');
const input = document.querySelector('#login input');
const greeting = document.querySelector('#greeting');

const HIDDEN_CLASS = 'hidden';
const USERKEY_NAME = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    const username = input.value;
    localStorage.setItem(USERKEY_NAME, username);
    printGreeting(username);
}

function printGreeting(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASS);
    loginForm.classList.add(HIDDEN_CLASS);
}

const saveLocalStorage = localStorage.getItem(USERKEY_NAME);

if(saveLocalStorage === null) {
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    printGreeting(saveLocalStorage);
}