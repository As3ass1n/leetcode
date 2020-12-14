/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let area = 0;
  let i = 0,
    j = height.length - 1;

  while (i < j) {
    area = Math.max(Math.min(height[i], height[j]) * (j - i), area);
    if (height[i] > height[j]) {
      j--;
    } else {
      i++;
    }
  }
  return area;
};

// @lc code=end
