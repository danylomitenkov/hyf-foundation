// 1. Remove First and Last Character (8 kyu)
// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
function removeChar(str) {
  return str.slice(1, -1);
}

// 2. Counting sheep... (8 kyu)
// https://www.codewars.com/kata/54edbc7200b811e956000556
function countSheeps(sheep) {
  return sheep.filter(Boolean).length;
}

// 3. String ends with? (7 kyu)
// https://www.codewars.com/kata/51f2d1cafc9c0f745c00037d
function solution(str, ending) {
  return str.endsWith(ending);
}

// 4. Odd or Even? (7 kyu)
// https://www.codewars.com/kata/5949481f86420f59480000e7
function oddOrEven(array) {
  const sum = array.reduce((acc, curr) => acc + curr, 0);
  return sum % 2 === 0 ? "even" : "odd";
}
