/*
 * @lc app=leetcode id=67 lang=javascript
 *
 * [67] Add Binary
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let sum = '';
    let i = a.length - 1, j = b.length - 1, carry = 0;
    while(i >= 0 || j >= 0 ){
      let temp = carry;
      if( i >= 0 ) {
        temp += a.charAt(i--) - '0';
      }
      if(j >= 0){
        temp += b.charAt(j--) - '0';
      }
      sum = temp % 2 + sum;
      carry = parseInt(temp / 2);
    }
    if(carry !== 0){
      sum = carry + sum
    }
    return sum;
};
// @lc code=end

