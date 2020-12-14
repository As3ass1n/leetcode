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

var climbStairs = function(n) {
  if(n <= 2) return n;
  let q = 0, p = 1; r = 1;
  for(let i = 0; i <= n - 2; i++){
    q = p;
    p = r;
    r = q + p
  }
  return r;
};
// @lc code=end

