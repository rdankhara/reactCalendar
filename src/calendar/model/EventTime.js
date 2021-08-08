export class EventTime {
    constructor(totalMinutes) {
        this.totalMinutes = totalMinutes;
    }

    get totalMinutes() {
        return this._totalMinutes;
    }

    set totalMinutes(value) {
        this._totalMinutes = value;
    }

    get hours() {
        const hrs = Math.trunc(this.totalMinutes / 60);

        return hrs >= 24 ? (hrs % 24) : hrs;
    }

    get minutes() {
        return this.totalMinutes % 60;
    }

    toString() {
        return `${this.hours}:${this.withPadding(this.minutes)} ${this.hours <12 ? 'AM' : 'PM'}`;
    }

    withPadding(value) {
        return value.toString().padStart(2, '0');
    }
}