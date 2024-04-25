const d = new Date();

const timeObject = {
    hour: 0,
    min: 0,
    sec: 0,
    newDate: function () {
        return new Date();
    },
    getHour: function () {
        const hour = new Date().getHours();
        return hour;
    },
    getMin: function () {
        const min = new Date().getMinutes();
        return min;
    },
    getSec: function () {
        const sec = new Date().getSeconds();
        return sec;
    },
    updateDate: function () {
        const d = new Date();
        this.hour = d.getHours();
        this.min = d.getMinutes();
        this.sec = d.getSeconds();
    },
    countUp: function () {
        this.sec++;
        if (this.sec == 60) {
            this.sec = 0;
            this.min++;
        }
        if (this.min == 60) {
            this.min = 0;
            this.hour++;
        }
    }
}