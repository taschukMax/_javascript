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
        },
        enumerable: true
    }
});

var Employee = function (firstName, lastName, position) {
    Person.call(this, firstName, lastName);
    this.position = position;
};
Employee.prototype = Object.create(Person.prototype, {
    /* sayHi: {
     value: function () {
     return Person.prototype.sayHi.call(this) + " My name is " + this.fullName;
     },
     enumerable: true
     },   */
    fullName: {
        get: (function () {
            var desc = Object.getOwnPropertyDescriptor(Person.prototype, "fullName").get;
            return function () {
                return desc.call(this) + ", " + this.position;
            };
        }()),
        enumerable: true
    }
});
var johnDoe = new Employee("John", "Doe", "Manager");
document.write(johnDoe.sayHi());

if (johnDoe.hasOwnProperty("toString")) {

} else if (johnDoe.__proto__.hasOwnProperty("toString")) {

}