var oojs = (function (oojs) {
    var createToolBarItem = function (itemElement) {
        var item = {
            toggleActiveState: function () {
                this.activated = !this.activated;
            }
        };

        Object.defineProperties(item, {
            element: {
                value: itemElement
            },
            enabled: {
                get: function () {
                    return !this.element.classList.contains("disabled");
                },
                set: function (value) {
                    if (value) {
                        this.element.classList.remove("disabled");
                    } else {
                        this.element.classList.add("disabled");
                    }
                }
            },
            activated: {
                get: function () {
                    return this.element.classList.contains("active");
                },
                set: function (value) {
                    if (value) {
                        this.element.classList.add("active");
                    } else {
                        this.element.classList.remove("active");
                    }
                }
            }
        });
        return item;
    };

    var createToolBarItems = function (itemElements) {
        var items = [];
        [].forEach.call(itemElements, function (el, index, array) {
            var item = createToolBarItem(el);
            items.push(item);
        });
        return items;
    };
    oojs.createToolbar = function (elementId) {
        var element = document.getElementById(elementId);
        if (!element) {
            element = document.createElement("div");
            element.id = elementId;
            element.className = "toolbar";
        }
        var items = element.querySelectorAll(".toolbar-item");
        var toolbar = {
            add: function (options) {
                var span = document.createElement("span");
                span.className = "toolbar-item";
                this.el.appendChild(span);
                var item = createToolBarItem(span);
                this.items.push(item);
            },
            remove: function (index) {
                var len = this.items.length;
                if (index > len || index < 0) {
                    throw new Error("Can't delete item");
                }
                var item = this.items[index];
                this.items.splice(index, 1);
                this.el.removeChild(item.el);
            },
            appendTo: function (parentElement) {
                parentElement.appendChild(this.el);
            }
        };
        Object.defineProperties(toolbar, {
            el: {
                value: element
            },
            items: {
                value: createToolBarItems(items),
                enumerable: true
            }
        });
        return toolbar;
    };
    return oojs;
}(oojs || {}));


var toolbar = oojs.createToolbar("myToolbar");
toolbar.items[0].enabled = false;
toolbar.items[2].enabled = false;
toolbar.add();
