System.register(["./geometry"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var geometry, Tetris, Score, TetrisLogic, TetrisGame;
    return {
        setters: [
            function (geometry_1) {
                geometry = geometry_1;
            }
        ],
        execute: function () {
            Tetris = /** @class */ (function () {
                function Tetris(rows, cols) {
                    this.Matrix = new geometry.Matrix(rows, cols);
                }
                Object.defineProperty(Tetris.prototype, "Rows", {
                    get: function () {
                        return this.Matrix.Rows;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                Object.defineProperty(Tetris.prototype, "Columns", {
                    get: function () {
                        return this.Matrix.Columns;
                    },
                    enumerable: true,
                    configurable: true
                });
                ;
                return Tetris;
            }());
            exports_1("Tetris", Tetris);
            Score = /** @class */ (function () {
                function Score() {
                }
                return Score;
            }());
            exports_1("Score", Score);
            TetrisLogic = /** @class */ (function () {
                function TetrisLogic() {
                }
                return TetrisLogic;
            }());
            exports_1("TetrisLogic", TetrisLogic);
            TetrisGame = /** @class */ (function () {
                function TetrisGame() {
                }
                TetrisGame.prototype.Start = function () {
                    this.BuildScene();
                };
                TetrisGame.prototype.BuildScene = function () {
                };
                TetrisGame.prototype.Pause = function () {
                    throw new Error("Method not implemented.");
                };
                TetrisGame.prototype.Resume = function () {
                    throw new Error("Method not implemented.");
                };
                TetrisGame.prototype.Stop = function () {
                    throw new Error("Method not implemented.");
                };
                return TetrisGame;
            }());
            exports_1("TetrisGame", TetrisGame);
        }
    };
});
//# sourceMappingURL=tetris.js.map