import {EventTime} from "./EventTime";

export class Event {
    constructor(start, end, subject) {
        this.start = start;
        this.end = end;
        this._subject = subject;
    }

    static comparator(a, b) {
        const startDiff = a.start.totalMinutes - b.start.totalMinutes;
        const endDiff = b.end.totalMinutes - a.end.totalMinutes;
        return startDiff === 0 ? endDiff : startDiff;
    }

    get start() {
        return this._start;
    }

    set start(value) {
        this._start = new EventTime(value);
    }

    get end() {
        return this._end
    }

    set end(value) {
        this._end = new EventTime(value);
    }

    get subject() {
        return this._subject;
    }
}