class Time {
    constructor(hour = "hh", min = "mm", sec = "ss") {
        this.hour = hour;
        this.min = min;
        this.sec = sec;
    }

    showHour() {
        return new Date().getHours();
    }

    showMinutes() {
        return new Date().getMinutes();
    }

    showSeconds() {
        return new Date().getSeconds();
    }

    updadeDate() {
        const d = new Date();
        this.hour = d.getHours();
        this.min = d.getMinutes();
        this.sec = d.getSeconds();
    }
}

const timeClass = new Time();