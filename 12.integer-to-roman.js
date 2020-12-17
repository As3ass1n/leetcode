/*
 * @lc app=leetcode id=12 lang=javascript
 *
 * [12] Integer to Roman
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */

const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
const romans = [
  "M",
  "CM",
  "D",
  "CD",
  "C",
  "XC",
  "L",
  "XL",
  "X",
  "IX",
  "V",
  "IV",
  "I",
];
var intToRoman = function (num) {
  let str = "";
  for (let i = 0; i < nums.length; i++) {
    while (num >= nums[i]) {
      str += romans[i];
      num -= nums[i];
    }
  }
  return str;
};
// @lc code=end
