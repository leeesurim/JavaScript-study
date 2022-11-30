const clock = document.querySelector("h2#clock");

function getClock(){
    const date = new Date();
    // 숫자기 때문에 padStart() 사용할 수 없어서 String() 문자열로 바꿔주기
    // padStart(문자가 가져야 하는 길이, 길이에 맞지 않다면 문자 앞쪽에 0을 추가)
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// setInterval은 1초 후에 출력되기 때문에 함수 호출
// 웹사이트가 로드되자마자 함수를 실행하고 또 매초마다 다시 실행되도록 함
getClock();
// setInterval => 한 함수를 특정 시간마다 실행
// setInterval(호출하려는 function의 이름, 매 호출 사이에 얼마나 기다릴지 시간)
setInterval(getClock, 1000);
