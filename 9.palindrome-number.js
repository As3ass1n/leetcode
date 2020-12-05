/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(x < 0 || (x !== 0 && x % 10 === 0)) return false;
    let rev = 0;
    while(x > rev){
      rev = rev * 10 + x % 10;
      x = Math.trunc(x / 10)
    }
    return (x === rev || x === Math.trunc(rev / 10)) 
};
// @lc code=end

