var calculate = function () {
    var fn = Array.prototype.pop.apply(arguments);
    return fn.apply(null, arguments);
};

var sum = function () {
    var total = 0;
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
};

var diff = function () {
    var total = Array.prototype.shift.apply(arguments);
    for (var i = 0; i < arguments.length; i++) {
        total -= arguments[i];
    }
    return total;
};

var sumResult = calculate(1, 2, 3, 4, 5, sum),
    diffResult = calculate(100, 9, 85, 1, 3, diff);
document.write(sumResult + "<br>");
document.write(diffResult);