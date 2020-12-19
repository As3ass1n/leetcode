/*
 * @lc app=leetcode id=389 lang=javascript
 *
 * [389] Find the Difference
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const obj = {};
  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]]) {
      obj[t[i]]++;
    } else {
      obj[t[i]] = 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] !== undefined) {
      obj[s[i]]--;
    }
  }
  for(let key in obj){
    if(obj[key] !== 0){
      return key
    }
  }
};
// @lc code=end

