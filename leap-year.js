function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return '윤년';
      }
      return '평년';
    }
    return '윤년';
  }
  return '평년';
}

console.log(isLeapYear(2100)); // 평년
console.log(isLeapYear(1991)); // 평년
console.log(isLeapYear(1993)); // 평년
console.log(isLeapYear(2000)); // 윤년
console.log(isLeapYear(1600)); // 윤년


// year % 4 === 0 -> 윤년
// year % 4 === 0 && year % 100 -> 평년
// year % 4 === 0 && year % 100 === 0 && year % 400 === 0 -> 윤년