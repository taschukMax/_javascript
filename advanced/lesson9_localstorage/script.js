/**
 * User: maksym.tashchuk
 * Date: 4/9/14
 * Time: 6:02 PM
 */
var person = {
    firstName: "",
    lastName: "",
    phoneNumber: ""
};

person.firstName = "Maksym";
person.lastName = "Tashchuk";
person.phoneNumber = "066 505 6607";
localStorage.person = JSON.stringify(person);
