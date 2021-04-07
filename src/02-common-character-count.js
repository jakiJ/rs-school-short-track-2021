/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');
  let coincidence = 0;
  for (let i = 0; i < s1Arr.length; i++) {
    const index = s2Arr.indexOf(s1Arr[i]);
    if (index !== -1) {
      coincidence++;
      delete s2Arr[index];
    }
  }
  return coincidence;
}

module.exports = getCommonCharacterCount;
