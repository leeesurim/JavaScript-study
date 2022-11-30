const clockTitle = document.querySelector(".js-clock");

function TimeUntilClock(){
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate()
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const date1 = new Date(year, month, day, hours, minutes, seconds);
    const date2 = new Date(2022, 11, 25, 0, 0, 0);

    const dateGap = date2.getTime() - date1.getTime(); 
    const dayGap = Math.floor(dateGap / 1000 / 60 / 60 / 24);
    const hoursGap = Math.floor((dateGap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesGap = Math.floor((dateGap % (1000 * 60 * 60)) / (1000 * 60));
    const secondsGap = Math.floor((dateGap % (1000 * 60)) / 1000);

    clockTitle.innerText = `${dayGap}d ${hoursGap}h ${minutesGap}m ${secondsGap}s`
}

TimeUntilClock();
setInterval(TimeUntilClock, 1000);