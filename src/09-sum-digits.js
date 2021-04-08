/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const getSum = (value) => {
  const str = String(value);
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }
  return sum;
};

function getSumOfDigits(num) {
  let sumNum = num;
  while (sumNum >= 10) {
    sumNum = getSum(sumNum);
  }
  return sumNum;
}

module.exports = getSumOfDigits;
