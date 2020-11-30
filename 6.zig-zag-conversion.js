/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  let arr = [];
  let flg = false;
  let currRow = 0;
  for (let i = 0; i < numRows; i++) {
    arr[i] = ''
  }
  for(let i = 0 ; i < s.length; i++) {
    arr[currRow] += s[i];
    if(currRow === 0 || currRow === numRows - 1){
      flg = !flg;
    }
    currRow += (flg ? 1 : -1);
  }
  return arr.join('')
};

// @lc code=end
