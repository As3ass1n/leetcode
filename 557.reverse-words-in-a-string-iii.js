/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let str = "";
  const len = s.length;
  let i = 0;
  while (i < len) {
    let start = i;
    while (i < len && s[i] !== " ") {
      i++;
    }
    for (let j = i - 1; j >= start; j--) {
      str += s[j];
    }
    while (i < len && s[i] === " ") {
      i++;
      str = str + " ";
    }
  }
  return str;
};
// @lc code=end
