/*You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

#Examples:

Kata.getMiddle("test") should return "es"

Kata.getMiddle("testing") should return "t"

Kata.getMiddle("middle") should return "dd"

Kata.getMiddle("A") should return "A"
*/

function getMiddleCharacter(s) {
  let strInHalf = s.length / 2;
  if (s.length % 2 == 0) {
    return s[strInHalf - 1] + s[strInHalf];
  } else {
    return s[strInHalf - 0.5];
  }
}
