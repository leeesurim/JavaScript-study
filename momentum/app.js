const body = document.getElementById("bg");
var intViewportWidth = window.innerWidth;

function handleWindowResize(){
    if(intViewportWidth >= 1200){
        body.classList.remove("bg");
        body.classList.remove("minus");
        body.classList.add("plus");
    }else if(intViewportWidth < 1200 && intViewportWidth >=800){
        body.classList.remove("plus");
        body.classList.remove("minus");
        body.classList.add("bg");
        
    }else if(intViewportWidth < 800 && intViewportWidth >= 400){
        body.classList.remove("plus");
        body.classList.remove("bg");
        body.classList.add("minus");
    }

}

window.addEventListener("resize", handleWindowResize);
