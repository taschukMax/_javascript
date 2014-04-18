var MyString = function (value) {
    var obj = {};
    Object.defineProperties(obj, {
        getCurrentValue: {
            value: value
        },
        getValue: {
            get: function (a) {
                var arr = [];
                for (var i = 0; i < this.length; i++) {
                    arr[i] = value[i];
                }
                return arr;
            }
        },
        toString: {
            value: function () {
                return value;
            },
            enumerable: true
        },
        length: {
            get: function () {
                return value.lastIndexOf("")
            }
        },
        valueOf: {
            value: function () {
                return this.getCurrentValue;
            }
        },
        charAt: {
            value: function (index) {
                var result;
                for (var i = 0; i < this.length; i++) {
                    if (i === index * 1) {
                        result = value[i];
                        break;
                    } else {
                        result = value[0];
                    }
                }
                return result;
            }
        },
        concat: {
            value: function (word) {
                return value += word;
            }
        }
    });
    return obj;
};

var str = new MyString("Maxim Taschuk");



