const h1 = document.getElementById("title");

function handleTitleClick(){
    h1.classList.toggle("clicked");
}

// classList - class들의 목록으로 작업할 수 있게 허용
// className - 이전 class들은 상관하지 않고 모든 걸 교체
h1.addEventListener("click", handleTitleClick);
