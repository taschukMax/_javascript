/**
 * User: maksym.tashchuk
 * Date: 4/10/14
 * Time: 3:35 PM
 */
var createPerson = function (firstName, lastName) {
        var person = {};
        Object.defineProperties(person, {
            firstName: {
                value: firstName,
                enumerable: true
            },
            lastName: {
                value: lastName,
                enumerable: true
            },
            fullName: {
                get: function () {
                    return this.firstName + " " + this.lastName
                }//,
                //configurable: true
            }
        })
        ;
        return person;
    }
    ;

var person = createPerson("John", "Doe");
document.write(person.fullName + "<br>");

/*Object.defineProperty(person, "fullName", {
 get: function () {
 return this.lastName + ", " + this.firstName;
 }
 });*/
document.write(Object.keys(person));
