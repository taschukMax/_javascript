/**
 * User: maksym.tashchuk
 * Date: 4/10/14
 * Time: 3:57 PM
 */
var oojs = (function (oojs) {
        var createToolbarItems = function (itemElements) {
            var items = [];
            [].forEach.call(itemElements, function (element, index, array) {
                    var item = {
                        toggleActiveState: function () {
                            this.activated = !this.activated;
                        }
                    };
                    Object.defineProperties(item, {
                        element: {
                            value: element
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
                    /*var item = {
                     element: element,
                     disabled: function () {
                     this.element.classList.add("disabled");
                     },
                     enable: function () {
                     this.element.classList.remove("disabled");
                     },
                     isDisabled: function () {
                     return this.element.classList.contains("disabled");
                     },
                     activate: function () {
                     if (this.isDisabled()) {
                     return;
                     }
                     this.element.classList.add("active");
                     },
                     deactivate: function () {
                     if (this.isDisabled()) {
                     return;
                     }
                     this.element.remove("active")
                     },
                     isActive: function () {
                     return this.element.classList.contains("active");
                     },
                     toggleActiveState: function () {
                     if (this.isActive()) {
                     this.deactivate();
                     } else {
                     this.activate();
                     }
                     }
                     };*/
                    items.push(item);
                }
            )
            ;
            return items;
        };
        oojs.createToolbar = function (elementId) {
            var element = document.getElementById(elementId);
            if (!element) {
                element = document.createElement("div");
                element.id = elementId;
            }
            var items = element.querySelectorAll(".toolbar-item");
            return {
                items: createToolbarItems(items)
            }
        };
        return oojs;
    }
        (oojs || {})
        )
    ;


/*var toolbar = oojs.createToolbar("myToolbar");
 var toolbarItem = toolbar.items[0];

 toolbarItem.setEnabled(true);
 toolbarItem.getEnabled();
 toolbarItem.enabled = true;
 var enabled = toolbarItem.enabled;*/