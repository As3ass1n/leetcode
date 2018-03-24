const valid = (s) => {
  const str = [];
  const obj = {
    "(": ")",
    "[": "]",
    "{": "}"
  };

  for (let i = 0; i < s.length; i++) {
    if (!str.length) str.push(s[i]);
    else {
      if (s[i] === obj[str[str.length - 1]]) {
        str.pop()
      } else {
        str.push(s[i])
      }
    }
  }
  return !str.length;
}

console.log(valid('(){}[]'))