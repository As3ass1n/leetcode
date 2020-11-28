/*
 * @lc app=leetcode id=69 lang=javascript
 *
 * [69] Sqrt(x)
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  // if ((x === 1)) return x;
  let num = 0;
  let left = 0,
    right = x;

  while(left <= right) {
    let mid = left + Math.ceil((right - left) / 2);
    if (mid * mid <= x) {
      left = mid + 1;
      num = mid;
    } else {
      right = mid - 1;
    }
  }
  return num;
};

// @lc code=end
