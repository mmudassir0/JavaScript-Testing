const isPalindrome = require("./isPalindrome");
test("isPalindrom", () => {
  expect(isPalindrome("level")).toBe(true);
});
test("isPalindrom", () => {
  expect(isPalindrome("leve")).toBe(false);
});
