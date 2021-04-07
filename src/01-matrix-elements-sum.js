/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sumElement = 0;

  for (let k = 0; k < matrix[0].length; k++) {
    if (matrix[0][k] !== 0) {
      sumElement += matrix[0][k];
    }
  }

  for (let i = 1; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let count = i - 1;
      let boo = true;
      while (count >= 0) {
        if (matrix[count][j] === 0) {
          boo = false;
          break;
        }
        count -= 1;
      }
      if (boo) {
        sumElement += matrix[i][j];
      }
    }
  }
  return sumElement;
}

module.exports = getMatrixElementsSum;
