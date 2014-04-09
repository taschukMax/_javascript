/**
 * Created with IntelliJ IDEA.
 * User: maksym.tashchuk
 * Date: 4/9/14
 * Time: 9:57 AM
 * To change this template use File | Settings | File Templates.
 */
(function () {
    var form = document.getElementById("theForm"),
        button = form.myButton,
        textbox = form.myTextBox,
        textarea = form.myTextArea,
        select = form.dayOfWeek,
        color = form.pageColor,
        checkboxColor = form.pageColor2;
    eventUtility.addEvent(form, "submit", function () {
        eventUtility.preventDefault(event);
    });
    eventUtility.addEvent(button, "click", function () {
        var index = select.selectedIndex;
        var option = select.options[index];
        var wedOption = new Option("Wednesday");
        var target = eventUtility.getTarget(event);
        var pickedColor = "";
        var pickedColor2 = [];

        for (var i = 0; i < color.length; i++) {
            if (color[i].checked) {
                pickedColor = color[i].value;
            }
        }
        for (var i = 0; i < checkboxColor.length; i++) {
            if (checkboxColor[i].checked) {
                pickedColor2.push(color[i].value);
            }
        }
        alert(pickedColor2.join(", "));
    });
}());