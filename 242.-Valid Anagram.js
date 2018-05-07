const isAnagram = function(s, t) {
  const hash = {};
  if(s.length !== t.length) return false;
  for(let i = 0; i < s.length; i++){
    if(hash[s[i]]){
      hash[s[i]]++;
    }else {
      hash[s[i]] = 1;
    }
  }
  for(let j = 0; j < t.length; j++){
    if(hash[t[j]] !== undefined){
      hash[t[j]]--;
      if(hash[t[j]] < 0){
        return false;
      }
    }else {
      return false;
    }
  }
  return true;
};