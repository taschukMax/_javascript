/**
 * Created with IntelliJ IDEA.
 * User: maksym.tashchuk
 * Date: 4/4/14
 * Time: 10:42 AM
 * To change this template use File | Settings | File Templates.
 */
var globalVar = "This is a global variable";

var globalFunction = function (paramOne) {
    var number = 10;
    var localFunction = function () {
        var number = 15;
        var superLocalVar = function () {
            var number = 12;
            alert(number);
        };
        superLocalVar();
        alert(number);
    };
    localFunction();
    alert(number);

};
globalFunction(2);