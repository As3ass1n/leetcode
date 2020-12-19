/*
 * @lc app=leetcode id=64 lang=javascript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const column = grid[0].length;
  const row = grid.length;

  const arr = new Array(grid.length);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(grid[i].length);
  }
  arr[0][0] = grid[0][0];
  for (let i = 1; i < column; i++) {
    arr[0][i] = arr[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < row; i++) {
    arr[i][0] = arr[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + grid[i][j];
    }
  }
  return arr[row - 1][column - 1];
};


// @lc code=end
