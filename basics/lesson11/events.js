/**
 * Created with IntelliJ IDEA.
 * User: maksym.tashchuk
 * Date: 4/7/14
 * Time: 10:07 AM
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var href = location;
    if (confirm("Do you want to Google.com?")) {
        location = "http://www.google.com";
    } else {
        document.write("ok");
    }
}());
