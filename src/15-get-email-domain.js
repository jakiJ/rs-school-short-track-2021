/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const emailArr = email.split('');
  const index = emailArr.lastIndexOf('@');
  const domain = emailArr.slice(index + 1, emailArr.length);
  return domain.join('');
}

module.exports = getEmailDomain;
