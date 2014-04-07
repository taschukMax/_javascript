(function () {
    var buttons = document.getElementsByTagName("button");
    var buttonClick = function () {
        var className = this.innerHTML.toLocaleLowerCase();
        document.body.className = className;
    };
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", buttonClick, false);
        buttons[i].removeEventListener("click", buttonClick, false);
    }
}());