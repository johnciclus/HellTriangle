import 'mocha';
import { expect, assert } from 'chai';
import HellTriangle from './Triangle';

describe('Matrix with a row', () => {
    it('should return 6', () => {
        let matrix = [[6]]
        let triangle = new HellTriangle(matrix)
        let maxTotal = triangle.calculateMaxTotal();

        expect(maxTotal).to.equal(6);
    });
});

describe('Matrix with 2 rows', () => {
    it('should return 11', () => {
        let matrix = [[6],[3,5]]
        let triangle = new HellTriangle(matrix)
        let maxTotal = triangle.calculateMaxTotal();

        expect(maxTotal).to.equal(11);
    });
});

describe('Matrix with 3 rows', () => {
    it('should return 18', () => {
        let matrix = [[6],[3,5],[9,7,1]]
        let triangle = new HellTriangle(matrix)
        let maxTotal = triangle.calculateMaxTotal();

        expect(maxTotal).to.equal(18);
    });
});

describe('Matrix with 4 rows', () => {
    it('should return 26', () => {
        let matrix = [[6],[3,5],[9,7,1],[4,6,8,4]]
        let triangle = new HellTriangle(matrix)
        let maxTotal = triangle.calculateMaxTotal();

        expect(maxTotal).to.equal(26);
    });
});

describe('Matrix with 5 rows', () => {
    it('should return 36', () => {
        let matrix = [[6],[3,5],[9,7,1],[4,6,8,4],[4,6,10,4,8]]
        let triangle = new HellTriangle(matrix)
        let maxTotal = triangle.calculateMaxTotal();

        expect(maxTotal).to.equal(36);
    });
});

describe('Non-triangular matrix', () => {
    it('error', () => {
        let matrix = [[6],[3,5],[9,7,1],[4,6,8,4],[4,6,10,4,8],[4,6,10,4,8]]
        let fn = function () { let triangle = new HellTriangle(matrix) }
        expect(fn).to.throw(Error);
    });
});

