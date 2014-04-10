/**
 * User: maksym.tashchuk
 * Date: 4/10/14
 * Time: 2:15 PM
 */
var name = "Maksym";

var globalGreet = function () {
    return "My name is " + this.name;
};

var johnDoe = {
    name: "John Doe",
    greet: globalGreet
};
globalGreet();
document.write(johnDoe.greet() + "<br>");
document.write(globalGreet());

var makeRequest = function (url, callback) {
    var data = 10;
    callback(data);
};

var obj = {
    someValue: 20,
    loadData: function (data) {
        var sum = this.someValue + data;
        alert(sum);
    },

    prepareRequest: function () {
        var url = "http://www.url.com";
        makeRequest(url, this.loadData.bind(obj));
    }
};
obj.prepareRequest();

