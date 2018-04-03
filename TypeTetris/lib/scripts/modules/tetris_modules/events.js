System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Event;
    return {
        setters: [],
        execute: function () {
            Event = /** @class */ (function () {
                function Event() {
                    this.handlers = [];
                }
                Event.prototype.add = function (handler) {
                    this.handlers.push(handler);
                };
                Event.prototype.remove = function (handler) {
                    //this.handlers = this.handlers.filter(h => h !== handler);
                    var handlerIndex = this.handlers.indexOf(handler, 0);
                    if (handlerIndex > -1) {
                        this.handlers.splice(handlerIndex, 1);
                    }
                };
                Event.prototype.raise = function (data) {
                    this.handlers.slice(0).forEach(function (h) { return h(data); });
                };
                return Event;
            }());
            exports_1("Event", Event);
        }
    };
});
//# sourceMappingURL=events.js.map