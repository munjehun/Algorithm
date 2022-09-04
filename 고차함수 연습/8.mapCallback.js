/*-문제
함수와 배열을 입력받아 배열의 각 요소에 함수가 적용된 새로운 배열을 리턴해야 합니다.

-주의 사항
  ▪️ 반복문(for)문을 사용해야 합니다.
  ▪️ arr.map 사용은 금지됩니다.
  ▪️ 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
*/

// 나의 풀이
function mapCallback(func, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    answer.push(func(arr[i]));
  }
  return answer;
}

// 예시 함수
function square(num) {
  return Math.pow(num, 2);
}

function mul10(num) {
  return num * 10;
}

// 예시 문제
let output = mapCallback(square, [2, 4, 7]);
console.log(output); // --> [4, 16, 49]

output = mapCallback(mul10, [2, 4, 7]);
console.log(output); // --> [20, 40, 70]

output = mapCallback(square, []);
console.log(output); // --> []
