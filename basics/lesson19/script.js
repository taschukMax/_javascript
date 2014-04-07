(function () {
    var buttons = document.getElementsByTagName("button");
    var buttonClick = function (event) {
        var target = eventUtility.getTarget(event),
            className = this.innerHTML.toLocaleLowerCase();
        document.body.className = className;
        eventUtility.preventDefault(event);
    };
    for (var i = 0; i < buttons.length; i++) {
        eventUtility.addEvent(buttons[i], "click", buttonClick);
    }
}());