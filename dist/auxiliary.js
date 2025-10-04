const canvas = document.getElementById("scrolling-canvas");
const ctx = canvas.getContext("2d");

ctx.font = "12px Roboto, Arial, sans-serif";
ctx.fillStyle = "#f9f8f4";

// Running string content
let text = "Документ оновлено о 19:57 | 05.09.2025 Виключено • ";
let x = 0;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const textWidth = ctx.measureText(text).width;
    // draw the same text one by one
    ctx.fillText(text, x, 24);
    ctx.fillText(text, x + textWidth, 24);
    x -= 1;
    if(x < -textWidth) {
        x = 0;
    }
    requestAnimationFrame(draw);
}

draw();