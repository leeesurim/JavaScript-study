const canvas = document.querySelector("canvas");

// context는 캔버스에 그림을 그릴 때 사용하는 붓
const ctx = canvas.getContext("2d");

// css에서 캔버스 크기 설정을 한 후 js에서도 작성
canvas.width = 800;
canvas.height = 800;

// 사각형 그리고 채우기 - ctx.fillRect(x, y, w, h)
// ctx.fillRect(50, 50, 100, 100)

// 사각형 그리기(보이지 않음) - ctx.rect(x, y, w, h)
ctx.rect(50, 50, 100, 100);
ctx.rect(150, 150, 100, 100);
ctx.rect(250, 250, 100, 100);

// 색 채우기
ctx.fill();

// 선 채우기
// ctx.stroke();

// 이전 경로를 중단하고, 새 경로 만들기
ctx.beginPath();
ctx.rect(350, 350, 100, 100);
ctx.rect(450, 450, 100, 100);
ctx.fillStyle = "red";
ctx.fill();
