const casinoForm = document.querySelector("#casino-form");
const setInput = document.querySelector("#casino-form .setInput");
const guessInput = document.querySelector("#casino-form .guessInput");

const chose = document.querySelector("#chose");
const you = document.querySelector("#chose span:first-child");
const machine = document.querySelector("#chose span:last-child")
const result = document.querySelector("#result");

const HIDDEN_CLASSNAME = "hidden";


function onCasinoSubmit(event){
    event.preventDefault();
    const setNum = setInput.value;
    const guessNum = guessInput.value;

    if (setNum < 0){
        alert("범위에는 음수가 포함될 수 없습니다.");
        return
    }

    chose.classList.remove(HIDDEN_CLASSNAME);
    result.classList.remove(HIDDEN_CLASSNAME);
    you.innerText = guessNum;
    machine.innerText = Math.floor(Math.random() * setNum);
    if (guessNum === machine.innerText){
        result.innerText = "You Won!";
    } else{
        result.innerText = "You lost!";
    }
}

casinoForm.addEventListener("submit", onCasinoSubmit);

