/**
 * User: maksym.tashchuk
 * Date: 4/11/14
 * Time: 4:51 PM
 */
var person = {
    firstName: "Max",
    lastName: "Taschuk"
};

Object.defineProperty(person, "fullName", {
    get: function () {
        return this.firstName + " " + this.lastName;
    }
});

var employee = Object.create(person, {
    sayHi: {
        value: function () {
            return this.__proto__.sayHi.call(this) + " My name is " + this.fullName
        },
        writable: false,
        enumerable: true
    }
});

person.sayHi = function () {
    return "Hi there";
};