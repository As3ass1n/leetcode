function strStr(haystack, needle) {
  if (needle === '' || haystack === needle) return 0;
  const hayLength = haystack.length;
  const needleLen = needle.length;
  let index = 0;
  for (; index < hayLength - needleLen; index++) {
    let hsIndex = index, ndIdx = 0;
    while (ndIdx < needleLen && haystack.charAt(hsIndex) === needle.charAt(ndIdx)) {
      hsIndex++;
      ndIdx++;
    }
    if (ndIdx === needleLen) return index;
  }
  return -1;
}

console.log(strStr('aaaaa', 'bba'));