/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let arr = s.split("");
  let result = [];
  let counter = 0;
  for (let letter of arr) {
    counter++;
    result.push(letter.repeat(counter).toLowerCase());
  }
  result = result.map(x => x.charAt(0).toUpperCase() + x.slice(1));
  return result.join("-");
}
