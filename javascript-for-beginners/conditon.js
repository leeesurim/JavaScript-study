// prompt - 사용자에게 메세지를 보여주고, 값을 넣으라고 말함
// parseInt("abc") => NaN(Not a Number)
// 함수는 내부에서부터 외부로 실행(prompt => parseInt)
const age = parseInt( prompt("How old are you?") );

// typeof variable - 변수의 타입 확인
// parseInt() - String => Number 변환
// console.log(typeof "15", typeof parseInt("15"));

// isNaN() - 하나의 argument(인자)를 주면 NaN인지 확인
// true - 숫자가 아님, false - 숫자
if (isNaN(age) || age < 0){
    console.log("Please write a real positive number");
} else if(age < 18){
    console.log("You are too young");
} else if(age >= 18 && age <= 50){
    console.log("You can drink");
} else if(age > 50 && age <= 80){
    console.log("You should exercise");
} else if (age > 80){
    console.log("You can do whatever you want")
}



