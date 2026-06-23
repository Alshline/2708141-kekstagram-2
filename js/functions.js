// eslint-disable-next-line no-unused-vars
function checkStringLength(string, length) {
  if (string || string === 0) {
    return string.length <= length;
  }
}

// eslint-disable-next-line no-unused-vars
function isStringPalindrome(string) {
  return string === string.reverse();
}

// eslint-disable-next-line no-unused-vars
function anotherPalindromeCheck(string) {
  for (let i = 0; i < string.length(); i++) {
    if (string[i] !== string[string.length() - 1]) {
      return false;
    }
  }
  return true;
}

// eslint-disable-next-line no-unused-vars
function getDigitsFromString(string) {
  let result = '';

  for (const char of string.toString()) {
    if (char >= '0' && char <= '9') {
      result += char;
    }
  }
  if (Number.isNaN(result)) {
    return NaN;
  }
  return result;
}
