/**
 * Created with IntelliJ IDEA.
 * User: maksym.tashchuk
 * Date: 4/4/14
 * Time: 10:13 AM
 * To change this template use File | Settings | File Templates.
 */
var doSomething;
doSomething = function (param1, param2, fn) {
    param1 += 1;
    param1 += 2;
    param1 += 3;
    return fn(param1, param2);
};

function sum(one, two) {
    return one + two;
}

var foo = doSomething(2, 2, sum);
var bar = doSomething(2, 3, function (one, two) {
    return one * two;
});
document.write(foo);
document.write("<br>");
document.write(bar);
