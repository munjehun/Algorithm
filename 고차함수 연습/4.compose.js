/*-문제
두 개의 함수와 수(num)를 입력받아 num에 함수들을 num에 가까운 순서대로 적용한 결과를 리턴해야 합니다.
*/

// -나의 풀이

function compose(func1, func2, num) {
  return func1(func2(num));
}

// -예시 적용 함수
function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

function isOdd(num) {
  return num % 2 !== 0;
}

let output = compose(add5, square, 2);
console.log(output); // --> 9

output = compose(square, add5, 2);
console.log(output); // --> 49

output = compose(isOdd, add5, 2);
console.log(output); // --> true
