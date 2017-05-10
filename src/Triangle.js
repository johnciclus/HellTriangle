"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var moment = require("moment");
/**
 * Class representing the Hell Triangle concept with
 * matrix's attribute to store the data and
 * maxTotal's attribute to store the maximum total
 */
var HellTriangle = (function () {
    /**
     * Class constructor to define a HellTriangle instance
     * @param matrix:  multidimensional array of numbers
     */
    function HellTriangle(matrix) {
        if (this.checkTriangularMatrix(matrix)) {
            this.matrix = matrix;
            this.maxTotal = 0;
        }
        else {
            throw Error('Non-triangular matrix Error');
        }
    }
    /**
     * Private method to check if the matrix is triangular
     * @param matrix: multidimensional array of numbers
     * @returns {boolean}
     */
    HellTriangle.prototype.checkTriangularMatrix = function (matrix) {
        var length = 1;
        for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
            var row = matrix_1[_i];
            if (length == row.length) {
                length++;
            }
            else {
                return false;
            }
        }
        return true;
    };
    /**
     * Recursive method to calculate the maximum recursive
     * @param rIdx: row index to identify the current element in the matrix
     * @param cIdx: column index to identify the current element in the matrix
     * @returns {maxTotal}: maximum total
     */
    HellTriangle.prototype.sumMaximumRecursive = function (rIdx, cIdx) {
        this.maxTotal += this.matrix[rIdx][cIdx];
        if ((rIdx + 1) < this.matrix.length) {
            rIdx++;
            if (this.matrix[rIdx][cIdx] > this.matrix[rIdx][cIdx + 1]) {
                return this.sumMaximumRecursive(rIdx, cIdx);
            }
            else {
                return this.sumMaximumRecursive(rIdx, cIdx + 1);
            }
        }
        else {
            return this.maxTotal;
        }
    };
    /**
     * Public method to calculate the maximum total of the matrix
     * @returns {number}
     */
    HellTriangle.prototype.calculateMaxTotal = function () {
        var initialTime = moment();
        this.maxTotal = 0;
        var result = this.sumMaximumRecursive(0, 0);
        var finalTime = moment();
        var diff = moment.duration(finalTime.diff(initialTime));
        console.log(diff._milliseconds + ' milliseconds');
        return result;
    };
    return HellTriangle;
}());
exports.default = HellTriangle;
