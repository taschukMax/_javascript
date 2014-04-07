var testAnimation = function () {
    var speed = 500,
        counter = 0,
        doSomething = function () {
            console.log("doSomething() executed " + (counter + 1) + " times");
            counter += 1;
            if (counter > 9) {
                //setTimeout(doSomething, speed);
                clearInterval(timer);
            }
        };
    var timer = setInterval(doSomething, speed);
};

var startAnimation = (function () {
    var speed = 50,
        counter = 0,
        moveBox = function (moveBy) {
            var el = document.getElementById("box"),
                left = el.offsetLeft;
            if ((moveBy > 0 && left > 399) || (moveBy < 0 && left < 51)) {
                clearTimeout(timer);
                timer = setInterval(function () {
                    moveBox(moveBy * -1)
                }, speed);
            }
            el.style.left = left + moveBy + "px";
        };
    var timer = setInterval(function () {
        moveBox(3);
    }, speed);
});
(function () {
    var start = document.getElementById("start");
    start.onclick = function () {
        startAnimation();
    };
    var stop = document.getElementById("stop");
    stop.onclick = function () {
    }
}());
//startAnimation();