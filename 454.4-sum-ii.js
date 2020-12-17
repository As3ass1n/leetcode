/*
 * @lc app=leetcode id=454 lang=javascript
 *
 * [454] 4Sum II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const sumMap = new Map();
  let count = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      const sum = A[i] + B[j];
      sumMap.set(sum, sumMap.has(sum) ? sumMap.get(sum) + 1 : 1);
    }
  }
  for (let i = 0; i < C.length; i++) {
    for (let j = 0; j < D.length; j++) {
      const sum = C[i] + D[j];
      count = count + (sumMap.get(0 - sum) || 0);
    }
  }
  return count;
};

const A = [-1, -1];
const B = [-1, 1];
const C = [-1, 1];
const D = [1, -1];
fourSumCount(A, B, C, D);

// @lc code=end
