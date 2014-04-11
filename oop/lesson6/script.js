var createPerson = function (firstName, lastName) {
    var person = {
        firstName: firstName,
        lastName: lastName,
        sayHello: function () {
            return "Hi there "
        }
    };
    Object.defineProperty(person, "fullName", {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        configurable: true
    });
    return person;
};

var createEmployee = function (firstName, lastName, position) {
    var person = createPerson(firstName, lastName);
    person.position = position;
    var fullName = Object.getOwnPropertyDescriptor(person, "fullName");
    var fullNameFunc = fullName.get.bind(person);

    Object.defineProperty(person, "fullName", {
        get: function () {
            return fullNameFunc() + ", " + this.position;
        },
        enumerable: true,
        configurable: true
    });
    var sayHelloFn = person.sayHello.bind(person);
    person.sayHello = function () {
        return sayHelloFn() + "My name is " + this.fullName;
    };
    return person;
};

var employee = createEmployee("Person", "Person", "Developer");
document.write(employee.sayHello());