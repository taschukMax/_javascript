(function () {
    var mouseHandler = function (e) {
        var target = eventUtility.getTarget(event),
            classData = target.getAttribute("data-body-class");

        if (classData) {
            eventUtility.preventDefault(event);
            if (event.type === "click") {
                document.body.className = "";
            } else {
                document.body.className = classData;
            }
        }
    };
    eventUtility.addEvent(document, "mouseover", mouseHandler);
    eventUtility.addEvent(document, "click", mouseHandler);
}());