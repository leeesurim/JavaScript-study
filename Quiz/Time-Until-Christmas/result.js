const clockTitle = document.querySelector(".js-clock");

// 크리스마스 날짜를 얻기 위한 코드
// 올해의 연도를 얻기 위해 - getFullYear() 함수 사용
const xmasDay = new Date(`${new Date().getFullYear()}-12-25:00:00:00+0900`);

function getTime(){
    // Date의 인수에 아무것도 적지 않으면 현재 시간을 생성해 줍니다.
    const now = new Date();

    // Date 함수로 생성한 Date 객체는 연산이 가능합니다.
    const difference = new Date(xmasDay - now); // Sat Jan 24 1970 16:46:10 GMT+0900 (한국 표준시)

    // 1초는 1000미리 초. 1시간은 60분, 1분은 60초, 하루는 24시간으로 나눠줍니다.
    const secondsInMs = Math.floor(difference / 1000); // 2015170
    const minutesInMs = Math.floor(secondsInMs / 60); // 33586 
    const hoursInMs = Math.floor(minutesInMs / 60); // 559
    const days = Math.floor(hoursInMs / 24); // 23

    // console.log("difference", difference);
    // console.log(`secondsInMs ${secondsInMs} minutesInMs ${minutesInMs} hoursInMs ${hoursInMs} days ${days}`);

    const seconds = secondsInMs % 60;
    const minutes = minutesInMs % 60;
    const hours = hoursInMs % 24;

    // console.log(`seconds ${seconds} minutes ${minutes} hours ${hours}`);

    // 남은 시간이 10보다 작아질 경우 앞에 0을 붙여 두 자리로 나타내기 위한 코드입니다.
    const daysStr = `${days < 10 ? `0${days}` : days}d`;
    const hoursStr = `${hours < 10 ? `0${hours}` : hours}h`;
    const minutesStr = `${minutes < 10 ? `0${minutes}` : minutes}m`;
    const secondsStr = `${seconds < 10 ? `0${seconds}` : seconds}h`;

    // console.log(`daysStr ${daysStr} hoursStr ${hoursStr} minutesStr ${minutesStr} secondsStr ${secondsStr}`);

    clockTitle.innerHTML = `${daysStr} ${hoursStr} ${minutesStr} ${secondsStr}`;
}

// 브라우저가 시작하고 1초간은 시간이 화면에 나타나지 않기 때문에 먼저 한번 실행시켜 줍니다.
getTime();

// setInterval함수를 사용해 getTime 함수를 1000미리 초(1초)마다 실행되게 해줍니다.
setInterval(getTime, 1000);