System.register(["./modules/testModule", "JQuery"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testModule, JQuery_1, testM, contentElement, name;
    return {
        setters: [
            function (testModule_1) {
                testModule = testModule_1;
            },
            function (JQuery_1_1) {
                JQuery_1 = JQuery_1_1;
            }
        ],
        execute: function () {
            JQuery_1.default("content").html("Next Step...");
            //import game = require('/tetris_modules/game');
            console.log("Application was successfully loaded");
            testM = new testModule.TestClass(5);
            console.log("Value = " + testM.value);
            contentElement = this.context.getElementById("content");
            name = "Joe";
            contentElement.innerHTML = "Name = " + name;
            //import * as tetris from "../modules/tetris_modules/tetris";
            //var tetrisElement = new tetris.Tetris(21,15);
            //contentElement.innerHTML = `Rows = ${tetrisElement.Rows}, Cols = ${tetrisElement.Columns}`;
        }
    };
});
//# sourceMappingURL=app.js.map