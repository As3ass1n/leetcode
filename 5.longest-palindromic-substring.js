/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */

let low = 0, maxLen = 0;
var longestPalindrome = function(s) {
  for(let i = 0; i < s.length; i++){
    expandPalindrome(s, i, i);
    expandPalindrome(s, i, i + 1);
  }
  console.log(s.substring(lo, lo + maxLen));
  return s.substring(lo, lo + maxLen)
};
const expandPalindrome = (s, left, right) => {
  while(left >= 0 && right < s.length && s[left] === s[right]){
    left--;
    right++;
  }
  if(maxLen < right - left - 1){
    lo = left + 1;
    maxLen = right - left - 1;
  }
}

longestPalindrome('abbade')
// @lc code=end

