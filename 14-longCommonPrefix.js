const longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";
  const strsLen = strs.length;

  const sortStrs = strs.sort((a, b) => {
    return a.length - b.length;
  });

  let shortStr = sortStrs[0];
  let commonPrefix;
  for (let i = 0; i < strsLen; i++) {
    commonPrefix = '';
    for (let j = 0; j < sortStrs[0].length; j++) {

      if (shortStr[j] === sortStrs[i][j]) {
        commonPrefix += sortStrs[0][j];
      } else {
        shortStr = commonPrefix;
      }
    }
  }
  console.log(commonPrefix)
  return commonPrefix;
};

const arr = [
  ""
]
longestCommonPrefix(arr)