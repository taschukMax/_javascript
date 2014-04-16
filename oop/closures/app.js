function _f() {
    var b = "b";
    return function () {
        return b;
    }
}
var n;
function f() {
    var b = "b";
    n = function () {
        return b;
    }
}

function f1(arg) {
    var n = function () {
        return arg;
    };
    arg++;
    return n;
}

var m = f1(1);
function f2() {
    var a = [];
    var i;
    for (i = 0; i < 3; i++) {
        a[i] = (function (x) {
            return function () {
                return x;
            };
        })(i);
    }
    return a;
}

var a = f2();

function f3() {
    function makeClosure(x) {
        return function () {
            return x;
        }
    }

    var a = [];
    var i;
    for (var i = 0; i < 3; i++) {
        a[i] = makeClosure(i);
    }
    return a;
}

var b = f3();

var getValue, setValue;
(function () {
    var secret = 0;
    getValue = function () {
        return secret;
    };
    setValue = function (value) {
        secret = value;
    };
}());

function setup(x) {
    var i = 0;
    return function () {
        return x[i++];
    };
}
var next = setup(['a', 'b', 'c']);

function getRGD() {
    var rgb = "rgb",
        result = "(";

    for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i].substr(1);
        for (var j = 0; j < value.length; j++) {
            if (j % 2 !== 0) {
                var tmp = parseInt(value[j - 1] + "" + value[j], 16);
                result += tmp + ",";
            }
        }
    }
    return rgb += result.substr(0, result.length - 1) + ")";
}

var a1 = getRGD("#0000FF");
console.log(a1);