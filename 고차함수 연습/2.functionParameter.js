// -문제
// 함수와 수(num)를 입력받아 num에 함수를 적용(apply)한 결과를 리턴해야 합니다.

// -나의 풀이
function functionParameter(func, num) {
  return func(num);
}

//예시 적용 함수
function square(num) {
  return num * num;
}

function add5(num) {
  return num + 5;
}

let output = functionParameter(square, 2);
console.log(output); //4
output = functionParameter(add5, 3);
console.log(output); //8
