/*
Trolls are attacking your comment section!
A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.
Your task is to write a function that takes a string and return a new string with all vowels removed.
For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".
*/

function disemvowel(str) {
  str = str.split("");
  let result = [];
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  for (let letter of str) {
    if (vowels.indexOf(letter) === -1) {
      result.push(letter);
    }
  }
  return result.join("");
}
