"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Triangle_1 = require("./src/Triangle");
/**
 * Hell Triangle example with example data and using HellTriangle class
 */
var example = [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]];
var triangle = new Triangle_1.default(example);
var maxTotal = triangle.calculateMaxTotal();
/**
 * Prints Hell Triangle result
 */
console.log('HellTriangle\n');
console.log('Input: ' + JSON.stringify(example));
console.log('Maximum Total: ' + maxTotal);
