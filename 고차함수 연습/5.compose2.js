/*-문제
두 개의 함수를 입력받아 두 함수가 결합된 새로운 함수를 리턴해야 합니다.

-출력
▫️💥함수를 리턴해야 합니다.
▫️리턴되는 함수는 정수를 입력받아 func2, func1의 순으로 적용합니다.
*/

// 나의 풀이
function compose2(func1, func2) {
  return function (num) {
    return func1(func2(num));
  };
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

let output = compose2(add5, square);
console.log(output(4)); // --> 21

output = compose2(square, add5);
console.log(output(4)); // --> 81

output = compose2(isOdd, add5);
console.log(output(4)); // --> true
