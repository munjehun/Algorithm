// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

const odd = -11;
const even = 0;

function solution(num) {
  return num % 2 ? "Odd" : "Even";
}

console.log(solution(odd));
console.log(solution(even));
console.log(!!-1); //true
// 📌틀린 이유 : -3을 대입하면 -1이 나온다!

// 다른 사람의 풀이
/*
function evenOrOdd(num) {
  return num % 2 ? "Odd" : "Even";
}

📌조건문은 삼항 연산자로 간단하게!
*/
