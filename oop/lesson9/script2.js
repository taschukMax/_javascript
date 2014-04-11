/**
 * User: maksym.tashchuk
 * Date: 4/11/14
 * Time: 5:05 PM
 */
var Person = function (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
};

Object.defineProperties(Person.prototype, {
    sayHi: {
        value: function () {
            return "Hi there";
        },
        enumerable: true
    },
    fullName: {
        get: function () {
            return this.firstName + " " + this.lastName;
        }
    },
    enumerable: true
});

var Employee = function (firstName, lastName, position) {
    Person.call(this, firstName, lastName);
    this.position = position;
};
Employee.prototype = Object.create(Person.prototype, {
    sayHi: {
        value: function () {
            return "Hi there";
        },
        enumerable: true
    },
    fullName: {
        get: function () {
            return this.firstName + " " + this.lastName;
        }
    },
    enumerable: true
});
var johnDoe = new Employee("John", "Doe", "Manager");
