var oojs = (function (oojs) {
    var ToolbarItem = function (itemElement) {
        Object.defineProperty(this, "__el", {
            value: itemElement
        });
    };

    Object.defineProperties(ToolbarItem.prototype, {
        toggleActiveState: {
            value: function () {
                this.activated = !this.activated;
            },
            enumerable: true
        },
        enabled: {
            get: function () {
                return !this.__el.classList.contains("disabled");
            },
            set: function (value) {
                if (value) {
                    this.__el.classList.remove("disabled");
                } else {
                    this.__el.classList.add("disabled");
                }
            }
        },
        activated: {
            get: function () {
                return this.__el.classList.contains("active");
            },
            set: function (value) {
                if (value) {
                    this.__el.classList.add("active");
                } else {
                    this.__el.classList.remove("active");
                }
            }
        }
    });

    var createToolBarItems = function (itemElements) {
        var items = [];
        [].forEach.call(itemElements, function (el, index, array) {
            var item = new ToolbarItem(el);
            items.push(item);
        });
        return items;
    };
    var Toolbar = function (toolbarElement) {
        var items = toolbarElement.querySelectorAll(".toolbar-item");
        Object.defineProperties(this, {
            __el: {
                value: toolbarElement
            },
            items: {
                value: createToolBarItems(items),
                enumerable: true
            }
        });
    };
    Object.defineProperties(Toolbar.prototype, {
        add: {
            value: function (options) {
                var span = document.createElement("span");
                span.className = "toolbar-item";
                this.__el.appendChild(span);
                var item = new ToolbarItem(span);
                this.items.push(item);
            }
        },

        remove: {
            value: function (index) {
                var len = this.items.length;
                if (index > len || index < 0) {
                    throw new Error("Can't delete item");
                }
                var item = this.items[index];
                this.items.splice(index, 1);
                this.__el.removeChild(item.__el);
            }
        },
        appendTo: {
            value: function (parentElement) {
                parentElement.appendChild(this.__el);
            }
        }

    });

    oojs.createToolbar = function (elementId) {
        var element = document.getElementById(elementId);
        if (!element) {
            element = document.createElement("div");
            element.id = elementId;
            element.className = "toolbar";
        }
        return new Toolbar(element);
    };
    return oojs;
}(oojs || {}));