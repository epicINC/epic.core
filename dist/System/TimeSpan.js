"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TimeSpan {
    constructor(ticks) {
        this.ticks = ticks;
    }
    get Days() {
        return Math.floor(this.ticks / 86400000);
    }
    get Hours() {
        return Math.floor(this.ticks / 3600000 % 24);
    }
    get Minutes() {
        return Math.floor(this.ticks / 60000 % 60);
    }
    get Seconds() {
        return Math.floor(this.ticks / 1000 % 60);
    }
    get Milliseconds() {
        return this.ticks % 1000;
    }
    get Ticks() {
        return this.ticks;
    }
    get TotalDays() {
        return this.ticks * 1.1574074074074074E-8;
    }
    get TotalHours() {
        return this.ticks * 2.7777777777777777E-7;
    }
    get TotalMinutes() {
        return this.ticks * 1.6666666666666667E-05;
    }
    get TotalSeconds() {
        return this.ticks * 1E-03;
    }
    get TotalMilliseconds() {
        return this.ticks;
    }
    CompareTo(value) {
        if (this.ticks > value.ticks)
            return 1;
        if (this.ticks < value.ticks)
            return -1;
        return 0;
    }
    Equals(value) {
        return this.ticks === value.ticks;
    }
    ToString(format, formatProvider) {
        const totalDays = this.TotalDays;
        return `${totalDays > 0 ? totalDays : ''}.${this.Hours}:${this.Minutes}:${this.Seconds}`;
    }
    static Interval(value, scale) {
        return new TimeSpan(value * scale);
    }
    static FromDays(value) {
        return TimeSpan.Interval(value, 86400000);
    }
    static FromHours(value) {
        return TimeSpan.Interval(value, 3600000);
    }
    static FromSeconds(value) {
        return TimeSpan.Interval(value, 60000);
    }
    static FromMilliseconds(value) {
        return TimeSpan.Interval(value, 1);
    }
}
exports.TimeSpan = TimeSpan;
Date.prototype.Subtract = function (value) {
    return new TimeSpan(this.valueOf() - value.valueOf());
};
//# sourceMappingURL=TimeSpan.js.map