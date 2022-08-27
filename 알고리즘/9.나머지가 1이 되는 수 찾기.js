/*
-문제 설명
자연수 n이 매개변수로 주어집니다. n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 

-제한사항
3 ≤ n ≤ 1,000,000
*/
const a = 10;
const b = 12;

function solution(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 1) {
      return i;
    }
  }
}
console.log(solution(a)); //3
console.log(solution(b)); //11
