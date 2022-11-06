const loginForm = document.querySelector("#loginform");
const loginInput = document.querySelector("#loginform input");
const userInfo = document.querySelector("h1");
const HIDDEN_CLASSNAME = "hidden";
const clockDisplay = document.getElementById("clock");
const todoDisplay = document.getElementById("todo");
const locationDisplay = document.getElementById("geolocation");



function doLogin(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem("username", username);
    display(username);
}

function display(username) {
    userInfo.innerText = `Hello ${username}`;
    userInfo.classList.remove(HIDDEN_CLASSNAME);
    clockDisplay.classList.remove(HIDDEN_CLASSNAME);
    todoDisplay.classList.remove(HIDDEN_CLASSNAME);
    locationDisplay.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", doLogin);
} else {
    display(savedUsername);
}


