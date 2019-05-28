function highAndLow(numbers) {
  let arr = numbers.split(" ");
  let result = [];
  for (num of arr) {
    result.push(Number(num));
  }
  let min = Math.min(...result);
  let max = Math.max(...result);
  return max + " " + min;
}
highAndLow("6 2 3 64 5");
