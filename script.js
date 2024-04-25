function setup() {
    createCanvas(800, 800);
    setInterval(() => { timeObject.countUp() }, 1000);
}

function draw() {
    background(220);
    textSize(60);
    text(`${timeObject.hour}:${timeObject.min}:${timeObject.sec}`, 100, 200);
    text(`${timeClass.showHour()}:${timeClass.showMinutes()}:${timeClass.showSeconds()}`, 100, 300);
    startStop.draw();
}

function mouseClicked(){
    startStop.checkClicked();
}