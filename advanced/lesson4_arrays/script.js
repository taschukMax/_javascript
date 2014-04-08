var calculator = {
    calculate: function (x, y, fn) {
        return fn(x, y);
    }
};

var sum = function (x, y) {
        return x + y;
    },
    diff = function (x, y) {
        return x - y;
    };
var sumResult = calculator.calculate(1, 2, sum),
    diffResult = calculator.calculate(1, 2, diff);
var fruit = ["apples", "oranges", "bananas", "grapes", "oranges", "m"];
function isString(value, index, array) {
    return typeof  value === "string";
}
function isLengthOfOne(value, index, array) {
    return value.length === 1;
}
function startsWithG(value, index, array) {
    return value[0] === "g";
}
function startsWithAB(value, index, array) {
    return value[0] === "a" || value[0] === "b";
}
function doSmth(value, index, array) {
    if (value != "undefined") {
        document.write(value + "<br>");
    }
}
function doSmthWithMap(value, index, array) {
    document.write("Do you like " + value + " ?");
}

var result = fruit.map(doSmthWithMap);

document.write(fruit.every(isString) + "<br>");
document.write("<hr>");
document.write(fruit.every(isLengthOfOne) + "<br>");
document.write("<hr>");
document.write(fruit.some(startsWithG) + "<br>");
document.write("<hr>");
document.write(fruit.filter(startsWithAB) + "<br>");
document.write("<hr>");
document.write(fruit.forEach(doSmth) + "<br>");
document.write("<hr>");
document.write(result + "<br>");

