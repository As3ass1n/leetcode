/*
 * @lc app=leetcode id=70 lang=javascript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

const arr = [];
const start = Date.now();
var climbStairs = function(n) {
  if(n <= 2) return n;
  if(!arr[n - 1]) {
    arr[n - 1] = climbStairs(n - 1);
  }
  return arr[n - 1] + climbStairs(n - 2);
};
console.log(climbStairs(40), Date.now() - start);
// @lc code=end

