/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if(s.length === 0){
    return 0;
  }
  const words = s.split(' ');
  const wordsWithoutNull = words.filter(item => item!== '');
  if(wordsWithoutNull.length === 0){
    return 0;
  }
  return wordsWithoutNull[wordsWithoutNull.length - 1].length
};
