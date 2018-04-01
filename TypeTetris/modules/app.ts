import testModule = require('./testModule');
//import game = require('/tetris_modules/game');
console.log("Application was successfully loaded");

let testM = new testModule.TestClass(5);

console.log(`Value = ${testM.value}`);
var contentElement = this.document.getElementById("content");
let name: string = "Joe";
contentElement.innerHTML = `Name = ${name}`;

//import * as tetris from "../modules/tetris_modules/tetris";
//var tetrisElement = new tetris.Tetris(21,15);

//contentElement.innerHTML = `Rows = ${tetrisElement.Rows}, Cols = ${tetrisElement.Columns}`;

