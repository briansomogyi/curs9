// const distance = 300;
// const timeout = 2000;

// let idInterval;

// const circleBall = {
//     init: {
//         x: 200,
//         y: 370,
//     },
//     movement: function () {
//         idInterval = setInterval(changePosition, 100);
//         function changePosition() {
//             circleBallX += timeout / distance;
//             if (circleBallX > startStop.init.buttonStop.x) {
//                 clearInterval(idInterval);
//                 circleBallX = 200;
//             }
//         }
//     },
//     drawCircle: function (x, y) {
//         fill("black");
//         circle(x, y, 15);
//     },
//     draw: function () {
//         this.drawCircle(circleBallX, circleBallY);
//     },
//     stop: function () {
//         clearInterval(idInterval);
//     }
// }

// let circleBallX = circleBall.init.x;
// let circleBallY = circleBall.init.y;

const startStop = {
    init: {
        buttonStart: {
            x: 100,
            y: 350,
            w: 100,
            h: 40,
            text: "Start",
            color: "green",
        },
        buttonStop: {
            x: 500,
            y: 350,
            w: 100,
            h: 40,
            text: "Stop",
            color: "red",
        },
    },
    draw: function () {
        this.drawButton(this.init.buttonStart.x, this.init.buttonStart.y, this.init.buttonStart.text, this.init.buttonStart.color);
        this.drawButton(this.init.buttonStop.x, this.init.buttonStop.y, this.init.buttonStop.text, this.init.buttonStop.color);

    },
    drawButton: function (x, y, buttonText, buttonColor) {
        fill(buttonColor);
        rect(x, y, this.init.buttonStart.w, this.init.buttonStart.h);
        fill("black");
        textSize(30);
        text(buttonText, x + 20, y + 30);
    },
    checkClicked: function (circleBall) {
        if (mouseX >= this.init.buttonStart.x &&
            mouseX <= this.init.buttonStart.x + this.init.buttonStart.w &&
            mouseY >= this.init.buttonStart.y &&
            mouseY <= this.init.buttonStart.y + this.init.buttonStart.h) {
            circleBall.movement();
        }
        if (mouseX >= this.init.buttonStop.x &&
            mouseX <= this.init.buttonStop.x + this.init.buttonStop.w &&
            mouseY >= this.init.buttonStop.y &&
            mouseY <= this.init.buttonStop.y + this.init.buttonStop.h) {
            circleBall.stop();
        }
    }
}

class CircleBall {
    init() {
        this.x = 200;
        this.y = 370;
        this.distance = 300;
        this.timeout = 2000;
        this.idInterval = 0;
    }

    changePosition(circleBall) {
        circleBall.x += circleBall.timeout / circleBall.distance;
        if (circleBall.x > startStop.init.buttonStop.x) {
            clearInterval(this.idInterval);
            circleBall.x = 200;
        }
    }

    movement() {
        this.idInterval = setInterval(this.changePosition, 100, this);
    }

    drawCircle(x, y) {
        fill("black");
        circle(x, y, 15);
    }

    draw() {
        this.drawCircle(this.x, this.y);
    }

    stop() {
        clearInterval(this.idInterval);
    }
}