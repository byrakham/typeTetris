System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Matrix, Vector3D, Size2D, Point2D, Point3D;
    return {
        setters: [],
        execute: function () {
            Matrix = /** @class */ (function () {
                function Matrix(rows, cols) {
                    //this.Data = new number[rows][cols];
                    this.Rows = rows;
                    this.Columns = cols;
                }
                return Matrix;
            }());
            exports_1("Matrix", Matrix);
            Vector3D = /** @class */ (function () {
                function Vector3D(x, y, z) {
                    this.x = x;
                    this.y = y;
                    this.z = z;
                }
                return Vector3D;
            }());
            exports_1("Vector3D", Vector3D);
            Size2D = /** @class */ (function () {
                function Size2D(width, height) {
                    this.width = width;
                    this.height = height;
                }
                return Size2D;
            }());
            exports_1("Size2D", Size2D);
            Point2D = /** @class */ (function () {
                function Point2D(x, y) {
                    this.x = x;
                    this.y = y;
                }
                return Point2D;
            }());
            exports_1("Point2D", Point2D);
            Point3D = /** @class */ (function () {
                function Point3D(x, y, z) {
                    this.x = x;
                    this.y = y;
                    this.z = z;
                }
                return Point3D;
            }());
            exports_1("Point3D", Point3D);
        }
    };
});
//# sourceMappingURL=geometry.js.map