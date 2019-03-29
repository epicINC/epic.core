"use strict";
var System;
(function (System) {
    System.InternalTicks = Symbol('TimeSpan.InternalTicks');
    class TimeSpan {
        constructor(ticks) {
            this[System.InternalTicks] = ticks;
        }
        get Days() {
            return Math.floor(this[System.InternalTicks] / 86400000);
        }
        get Hours() {
            return Math.floor(this[System.InternalTicks] / 3600000 % 24);
        }
        get Minutes() {
            return Math.floor(this[System.InternalTicks] / 60000 % 60);
        }
        get Seconds() {
            return Math.floor(this[System.InternalTicks] / 1000 % 60);
        }
        get Milliseconds() {
            return this[System.InternalTicks] % 1000;
        }
        get Ticks() {
            return this[System.InternalTicks];
        }
        get TotalDays() {
            return this[System.InternalTicks] * 1.1574074074074074E-8;
        }
        get TotalHours() {
            return this[System.InternalTicks] * 2.7777777777777777E-7;
        }
        get TotalMinutes() {
            return this[System.InternalTicks] * 1.6666666666666667E-05;
        }
        get TotalSeconds() {
            return this[System.InternalTicks] * 1E-03;
        }
        get TotalMilliseconds() {
            return this[System.InternalTicks];
        }
        CompareTo(value) {
            if (this[System.InternalTicks] > value[System.InternalTicks])
                return 1;
            if (this[System.InternalTicks] < value[System.InternalTicks])
                return -1;
            return 0;
        }
        Equals(value) {
            return this[System.InternalTicks] === value[System.InternalTicks];
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
    System.TimeSpan = TimeSpan;
})(System || (System = {}));
Date.prototype.Subtract = function (value) {
    return new System.TimeSpan(this.valueOf() - value.valueOf());
};
//# sourceMappingURL=TimeSpan.js.map