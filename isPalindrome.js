function isPalindrome(word) {
  let p1 = 0;
  let p2 = word.length - 1;
  if (p1 == p2) return true;
  while (p1 < p2) {
    if (word[p1] == word[p2]) {
      p1++;
      p2--;
      return true;
    }
    return false;
  }
}
module.exports = isPalindrome;
