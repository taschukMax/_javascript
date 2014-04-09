/**
 * User: maksym.tashchuk
 * Date: 4/9/14
 * Time: 6:26 PM
 */
(function () {
    try {
        var zero = 1 / 0;
        abert(zero);
    } catch (err) {
        alert("An error occurred. Please try again later");
        alert(err.message);
    } finally {
        alert("Finally");
    }
}());