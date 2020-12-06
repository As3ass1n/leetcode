/*
 * @lc app=leetcode id=434 lang=javascript
 *
 * [434] Number of Segments in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  let count = 0,
    str = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === " " && str !== "") {
      count++;
      str = "";
    } else if (s[i] !== " ") {
      str += s[i];
    }
  }

  return str === "" ? count : count + 1;
};
// @lc code=end
