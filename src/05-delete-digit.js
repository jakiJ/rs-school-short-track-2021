/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numArr = n.toString(10).split('').map((item) => parseInt(item, 10));
  for (let i = 0; i < Math.max(...numArr); i++) {
    if (numArr.indexOf(i) !== -1) {
      numArr.splice(numArr.indexOf(i), 1);
      break;
    }
  }
  return Number(numArr.join(''));
}

module.exports = deleteDigit;
