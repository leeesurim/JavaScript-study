const body = document.body;
const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";
const width = window.innerWidth;
document.querySelectorAll

function handleWindowResize(){
    if(width >= 1200){
        body.classList.add(BIG_SCREEN);
        body.classList.remove(MEDIUM_SCREEN);
    }else if(width < 1200 && width >=800){
        body.classList.add(MEDIUM_SCREEN);
        body.classList.remove(BIG_SCREEN);
    }else {
        body.classList.remove(MEDIUM_SCREEN);
        body.classList.add(SMALL_SCREEN);
    }
}

window.addEventListener("resize", handleWindowResize);