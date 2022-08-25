// -문제
//함수와 수(num)를 입력받아 num에 함수를 두 번(twice) 적용(apply)한 결과를 리턴해야 합니다.

// -나의 풀이

function applyTwice(func, num) {
  return func(func(num));
}

// -예시 적용 함수
function square(num) {
  return num * num;
}

let output = applyTwice(square, 2);
console.log(output);

function add5(num) {
  return num + 5;
}

output = applyTwice(add5, 3);
console.log(output);
