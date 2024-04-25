const startStop = {
    init: {
        buttonStart: {
            x: 100,
            y: 350,
            w: 100,
            h: 40,
            text: "Start",
            color: "white",
        },
        buttonStop: {
            x: 500,
            y: 350,
            w: 100,
            h: 40,
            text: "Stop",
            color: "white",
        },
    },
    draw: function () {
        this.drawButton(this.init.buttonStart.x, this.init.buttonStart.y, this.init.buttonStart.text);
        this.drawButton(this.init.buttonStop.x, this.init.buttonStop.y, this.init.buttonStop.text);
        this.drawCircle(200, 360);
    },
    drawButton: function (x, y, buttonText) {
        fill(this.init.buttonStart.color);
        rect(x, y, this.init.buttonStart.w, this.init.buttonStart.h);
        fill("black");
        textSize(30);
        text(buttonText, x + 20, y + 30);
    },
    drawCircle: function (x, y) {
        fill("black");
        circle(x, y, 15);
    },
    checkClicked: function () {
        if (mouseX >= this.init.buttonStart.x &&
            mouseX <= this.init.buttonStart.x + this.init.buttonStart.w &&
            mouseY >= this.init.buttonStart.y &&
            mouseY <= this.init.buttonStart.y + this.init.buttonStart.h) {
            this.init.buttonStart.color = "red";
        }
    }
}