function addLength(str) {
  let result = [];
  let arr = str.split(" ");
  for (let word of arr) {
    result.push(word + " " + word.length);
  }
  return result;
}

addLength("juan esta programando");
