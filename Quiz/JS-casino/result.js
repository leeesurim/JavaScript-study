const selectInput = document.querySelector("#select input");
const guessInput = document.querySelector("#guess input");
const playBtn = document.querySelector("#guess button");

const resultMessage = document.querySelector("#js-result span:first-child");
const score = document.querySelector("#js-result span:last-child");

function playBtnClick(event){
    event.preventDefault();
    // 입력이 제출되며 브라우저가 초기화되는 고유 동작을 막기 위한 코드입니다.
    const select = selectInput.value;
    const guess = guessInput.value;
    // selecteInput과 guessInput이 모두 입력이 없어 값이 비었을 땐 handleGuessSubmit함수를 빠져나옵니다
    if (select === "" || guess === ""){
        resultMessage.innerText = "";
        score.style.color = "red";
        score.innerHTML = "<strong>Please select Number!</strong>";
        return;
    }
    //  select과 guess의 타입은 현재 문자열입니다. 
    // 문자열 형태의 입력 값을 숫자 비교를 하기 위해 정수 형태로 바꿔주는 코드입니다.
    // parseInt()함수는 문자열을 정수 형태로 바꿔주는 함수입니다. 맨 마지막의 10은 10진수로 변경하라는 의미입니다.
    const selectNumber = parseInt(select, 10);
    const guessNumber = parseInt(guess, 10);
    // Math.random()은 0에서 1보다 작은 숫자를 생성하므로 숫자가 생성되는 범위는 max를 넘지 못합니다.
    // 여기서 버림이 아닌 올림을 하는 이유는 올림을 함으로써 max까지의 수를 얻을 수 있기 때문입니다.
    const machinechose = Math.ceil(Math.random() * selectNumber);

    resultMessage.innerText = `You chose: ${guessNumber}, the machine chose: ${machinechose}.`;
    score.style.color = "black";
    guessNumber === machinechose
    ? (score.innerHTML = "<strong>You won!</strong>")
    : (score.innerHTML = "<strong>You lost!</strong>")
}

playBtn.addEventListener("click", playBtnClick);








