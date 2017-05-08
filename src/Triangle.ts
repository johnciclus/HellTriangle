/**
 * Class representing the Hell Triangle concept with
 * matrix's attribute to store the data and
 * maxTotal's attribute to store the maximum total
 */
class HellTriangle{
    matrix: number[][];
    maxTotal: number;

    /**
     * Class constructor to define a HellTriangle instance
     * @param matrix:  multidimensional array of numbers
     */
    constructor(matrix: number[][]) {
        if(this.checkTriangularMatrix(matrix)) {
            this.matrix = matrix;
            this.maxTotal = 0;
        }
        else{
            throw Error('Non-triangular matrix Error');
        }
    }

    /**
     * Private method to check if the matrix is triangular
     * @param matrix: multidimensional array of numbers
     * @returns {boolean}
     */
    private checkTriangularMatrix(matrix){
        let length = 1;
        for(let row of matrix){
            if(length == row.length){
                length++;
            }
            else{
                return false;
            }
        }
        return true;
    }

    /**
     * Recursive method to calculate the maximum recursive
     * @param rIdx: row index to identify the current element in the matrix
     * @param cIdx: column index to identify the current element in the matrix
     * @returns {maxTotal}: maximum total
     */
    private sumMaximumRecursive(rIdx: number, cIdx: number){
        this.maxTotal += this.matrix[rIdx][cIdx];
        if((rIdx+1) < this.matrix.length){
            rIdx++;
            if(this.matrix[rIdx][cIdx] > this.matrix[rIdx][cIdx+1]){
                return this.sumMaximumRecursive(rIdx, cIdx)
            }else{
                return this.sumMaximumRecursive(rIdx, cIdx+1)
            }
        }
        else{
            return this.maxTotal;
        }
    }

    /**
     * Public method to calculate the maximum total of the matrix
     * @returns {number}
     */
    public calculateMaxTotal(){
        this.maxTotal = 0;
        return this.sumMaximumRecursive(0,0)
    }
}

export default HellTriangle;