"use strict";
var System;
(function (System) {
    var Globalization;
    (function (Globalization) {
        let Pattern;
        (function (Pattern) {
            Pattern[Pattern["None"] = 0] = "None";
            Pattern[Pattern["Minimum"] = 1] = "Minimum";
            Pattern[Pattern["Full"] = 2] = "Full";
        })(Pattern || (Pattern = {}));
        class TimeSpanFormat {
            static Format(value, format, formatProvider) {
                if (!format)
                    format = 'c';
                if (format.length === 1) {
                    switch (format[0]) {
                        case 'T':
                        case 'c':
                        case 't':
                            return TimeSpanFormat.FormatStandard(value, true, format, Pattern.Minimum);
                        case 'G':
                        case 'g':
                            return '';
                    }
                }
                return '';
            }
            static FormatStandard(value, isInvariant, format, pattern) {
                return '';
            }
        }
    })(Globalization = System.Globalization || (System.Globalization = {}));
})(System || (System = {}));
//# sourceMappingURL=TimeSpanFormat.js.map