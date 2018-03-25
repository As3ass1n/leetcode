/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function (str, pattern) {
  if (!pattern) return !str;
  const firstCharMatch = str[0] && (str[0] === pattern[0] || pattern[0] === '.');
  if (pattern.length >= 2 && pattern[1] === '*') {

    return !!(isMatch(str, pattern.slice(2)) || (firstCharMatch && isMatch(str.slice(1), pattern)))
  } else {
    return !!(firstCharMatch && isMatch(str.slice(1), pattern.slice(1)))
  }

};

// isMatch("aa", "a")
console.log(isMatch("ab", ".*c"));
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") 