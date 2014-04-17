/**
 * User: maksym.tashchuk
 * Date: 4/17/14
 * Time: 2:24 PM
 */
var B_day = function (day, month, year) {
    this.day = day;
    this.month = month;
    this.year = year;
};

Object.defineProperties(B_day.prototype, {
    getBirthdayDate: {
        get: function () {
            return this.month + " " + this.day + ", " + this.year;
        }
    },
    getDays: {
        value: function (month, day, year) {
            var currentYear = new Date().getFullYear(),
                stats = [0, 0, 0, 0, 0, 0, 0],
                days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                result = [];
            for (var i = currentYear; i <= year; i++) {
                stats[new Date(i, month - 1, day).getDay()]++;
            }
            for (var j = 0; j < days.length; j++) {
                result.push(days[j] + ": " + stats[j] + "<br>");
            }
            return result.join("");
        }
    }
});
(function () {
    var day = document.getElementById("day").value,
        month = document.getElementById("month").value,
        year = document.getElementById("year").value,
        expectedYear = document.getElementById("expectedYear").value,
        button = document.getElementById("results");

    var person = new B_day(day, month, year);
    document.write("<br>" + person.getDays(4, 9, 2015));
}());

