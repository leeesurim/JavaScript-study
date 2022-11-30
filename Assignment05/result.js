const h1 = document.querySelector("h1");
h1.style.color = "white";

function handleResize() {
  const size = window.innerWidth;
  const body = document.body;
  if (size < 700) {
    body.style.backgroundColor = "blue";
  } else if (size > 700 && size < 1400) {
    body.style.backgroundColor = "purple";
  } else {
    body.style.backgroundColor = "yellow";
  }
}

window.addEventListener("resize", handleResize);
