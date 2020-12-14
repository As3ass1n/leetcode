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

const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;
  // 初始化二维数组
  const arr = new Array(s.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = [];
  }
  let begin = 0;
  let maxLen = 1;

  for (let j = 1; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (s[i] !== s[j]) {
        arr[i][j] = false;
      } else {
        arr[i][j] = s[i] === s[j] && (j - i < 3 || arr[i + 1][j - 1]);
      }

      if (arr[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }
  console.log(s.substr(begin, maxLen));
  return s.substr(begin, maxLen);
};
longestPalindrome("aacabdkacaa");
// @lc code=end
