function nbYear(p0, percent, aug, p) {
  let yearCounter = 0;
  for (let i = yearCounter; p0 < p; yearCounter++) {
    p0 += p0 * (percent / 100) + aug;
  }
  return yearCounter;
}
