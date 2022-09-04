// const loginInput = loginForm.querySelector("input");
// const loginButton= loginForm.querySelector("button");
// const loginButton= document.querySelector("#login-form button");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const loginForm = document.getElementById("login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const savedUserName = localStorage.getItem(USERNAME_KEY);


if(savedUserName === null){
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener('submit',onLoginSubmit);
}else{
   paintGreetings(savedUserName)
}

function paintGreetings(username){
   greeting.classList.remove(HIDDEN_CLASSNAME);
   greeting.innerText = `Hello ${username}`;
}

function onLoginSubmit(e){
   const username = loginInput.value;
   console.log(username);
   e.preventDefault();
   localStorage.setItem(USERNAME_KEY, username);
   loginForm.classList.add(HIDDEN_CLASSNAME);
   paintGreetings(username)
}


