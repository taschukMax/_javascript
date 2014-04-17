/**
 * User: maksym.tashchuk
 * Date: 4/17/14
 * Time: 12:53 PM
 */
var some_obj = {
    name: "Ninja",
    say: function () {
        return "I'm a " + this.name;
    }
};

function F() {
}
F.prototype = some_obj;