var EventTarget = function () {
    Object.defineProperty(this, "__listeners", {
        value: {}
    });
};
Object.defineProperties(EventTarget.prototype, {
    addListener: {
        value: function (type, listener) {
            if (typeof  this.__listeners[type] === "undefined") {
                this.__listeners[type] = [];
            }
            this.__listeners[type].push(listener);
        },
        enumerable: true
    },
    __fire: {
        value: function (eventObj) {
            if (typeof eventObj.type === "undefined") {
                throw  new Error("Event object needs type");
            }
            if (typeof  eventObj.target === "undefined") {
                eventObj.target = this;
            }
            var listeners = this.__listeners[eventObj.type];
            if (typeof listeners === "undefined") {
                return;
            }
            for (var i = 0; i < listeners.length; i++) {
                listeners[i].call(this, eventObj);
            }
        }
    },
    removeListener: {
        value: function (type, listener) {
            var listeners = this.__listeners[type];
            if (typeof listeners === "undefined") {
                return;
            }
            for (var i = 0; i < listeners.length; i++) {
                if (listeners[i] === listener) {
                    listeners.splice(i, 1);
                    break;
                }
            }
        },
        enumerable: true
    }
});
var EventType = function (type) {
    if (typeof type !== "string") {
        throw new Error("Type must be a string");
    }
    Object.defineProperty(this, "type", {
        value: type,
        enumerable: true
    });
};