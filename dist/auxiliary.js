const canvas = document.getElementById("scrollingCanvas");
const ctx = canvas.getContext("2d");
let text = "Документ оновлено о 19:57 | 05.09.2025 Знято • Документ оновлено о 19:57 | 05.09.2025 Знято • ";
let canvasWidth = canvas.width;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(text, canvasWidth, 30);
    canvasWidth -= 1;
    if(canvasWidth < -ctx.measureText(text).width / 30) {
        text += text;
        console.log(text.length);
    }
    if(text.length > 1000) {
        text = text.slice(text.length * 0.5, text.length);
    }
    requestAnimationFrame(draw);
}

draw();