// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

function onLoginSubmit(){
    const username = loginInput.value;
    // if(username === ""){
    //     alert("Please write your name");
    // }else if(username.length > 15){
    //     alert("Your name is too long.");
    // }
    console.log(username);

}
loginForm.addEventListener("submit", onLoginSubmit);