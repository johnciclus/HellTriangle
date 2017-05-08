import HellTriangle from './src/Triangle';

/**
 * Hell Triangle example with example data and using HellTriangle class
 */
let example = [[6],[3,5],[9,7,1],[4,6,8,4]];
let triangle = new HellTriangle(example);
let maxTotal = triangle.calculateMaxTotal();

/**
 * Prints Hell Triangle result
 */
console.log('HellTriangle\n');
console.log('Input: '+JSON.stringify(example));
console.log('Maximum Total: '+ maxTotal);