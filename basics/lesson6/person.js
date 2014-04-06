/**
 * Created with IntelliJ IDEA.
 * User: Maksym
 * Date: 4/6/14
 * Time: 3:34 PM
 */
//First Method of creating object:
/*var person = new Object();
 person.firstName = "Maksym";
 person.lastName = "Tashchuk";
 person.getFullName = function () {
 return this.firstName + " " + this.lastName;
 };*/

//Second Method (literal)
var person = {
    firstName: "Maksym",
    lastName: "Tashchuk",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

document.write(person.getFullName());
