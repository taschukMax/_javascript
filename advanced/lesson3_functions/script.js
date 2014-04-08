/**
 * Created with IntelliJ IDEA.
 * User: maksym.tashchuk
 * Date: 4/8/14
 * Time: 3:44 PM
 * To change this template use File | Settings | File Templates.
 */
function doSmth(arg1) {
    return function () {
        alert(arg1);
    };
}

var fn = doSmth("hello");

var utility = (function () {
    var i = 0;
    return {
        nameGenerator: function () {
            return "customerName" + i++;
        }
    }

}());
var name = utility.nameGenerator(),
    name2 = utility.nameGenerator();
