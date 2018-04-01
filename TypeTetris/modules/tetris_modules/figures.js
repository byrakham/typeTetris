System.register([], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return function (d, b) {
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var __moduleName = context_1 && context_1.id;
    var RGBAColor, Geometry, Cube;
    return {
        setters: [],
        execute: function () {
            RGBAColor = /** @class */ (function () {
                function RGBAColor(r, g, b, a) {
                    if (a === void 0) { a = 255; }
                    this.r = r;
                    this.g = g;
                    this.b = b;
                    this.a = a;
                }
                return RGBAColor;
            }());
            Geometry = /** @class */ (function () {
                function Geometry() {
                }
                return Geometry;
            }());
            Cube = /** @class */ (function (_super) {
                __extends(Cube, _super);
                function Cube() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.Fill = null;
                    return _this;
                }
                return Cube;
            }(Geometry));
        }
    };
});
//# sourceMappingURL=figures.js.map