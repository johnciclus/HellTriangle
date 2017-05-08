"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("mocha");
var chai_1 = require("chai");
var Triangle_1 = require("./Triangle");
describe('Matrix with a row', function () {
    it('should return 6', function () {
        var matrix = [[6]];
        var triangle = new Triangle_1.default(matrix);
        var maxTotal = triangle.calculateMaxTotal();
        chai_1.expect(maxTotal).to.equal(6);
    });
});
describe('Matrix with 2 rows', function () {
    it('should return 11', function () {
        var matrix = [[6], [3, 5]];
        var triangle = new Triangle_1.default(matrix);
        var maxTotal = triangle.calculateMaxTotal();
        chai_1.expect(maxTotal).to.equal(11);
    });
});
describe('Matrix with 3 rows', function () {
    it('should return 18', function () {
        var matrix = [[6], [3, 5], [9, 7, 1]];
        var triangle = new Triangle_1.default(matrix);
        var maxTotal = triangle.calculateMaxTotal();
        chai_1.expect(maxTotal).to.equal(18);
    });
});
describe('Matrix with 4 rows', function () {
    it('should return 26', function () {
        var matrix = [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4]];
        var triangle = new Triangle_1.default(matrix);
        var maxTotal = triangle.calculateMaxTotal();
        chai_1.expect(maxTotal).to.equal(26);
    });
});
describe('Matrix with 5 rows', function () {
    it('should return 36', function () {
        var matrix = [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4], [4, 6, 10, 4, 8]];
        var triangle = new Triangle_1.default(matrix);
        var maxTotal = triangle.calculateMaxTotal();
        chai_1.expect(maxTotal).to.equal(36);
    });
});
describe('Non-triangular matrix', function () {
    it('error', function () {
        var matrix = [[6], [3, 5], [9, 7, 1], [4, 6, 8, 4], [4, 6, 10, 4, 8], [4, 6, 10, 4, 8]];
        var fn = function () { var triangle = new Triangle_1.default(matrix); };
        chai_1.expect(fn).to.throw(Error);
    });
});
