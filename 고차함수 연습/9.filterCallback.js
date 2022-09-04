/*-문제
함수와 배열을 입력받아 배열의 각 요소에 함수를 적용했을 때 그 결과가 참인 요소만을 갖는 새로운 배열을 리턴해야 합니다.

-주의 사항
  ▪️ 반복문(for)문을 사용해야 합니다.
  ▪️ arr.filter 사용은 금지됩니다.
  ▪️ 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
*/

// 나의 풀이
function filterCallback(func, arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 예시 함수
function isOdd(num) {
  return num % 2 === 1;
}

function isEven(num) {
  return !isOdd(num);
}

// 예시 문제
let output = filterCallback(isOdd, [1, 2, 3, 4]);
console.log(output); // --> [1, 3]

output = filterCallback(isEven, [1, 2, 3, 4]);
console.log(output); // --> [2, 4]
