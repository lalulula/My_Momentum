// const loginInput = loginForm.querySelector("input");
// const loginButton= loginForm.querySelector("button");
// const loginButton= document.querySelector("#login-form button");

const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";


function onLoginSubmit(e){
   const username = loginInput.value;
   console.log(username);
   e.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   greeting.innerText = `Hello ${username}`;
   greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener('submit',onLoginSubmit);
