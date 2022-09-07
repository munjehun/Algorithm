/*-문제 설명
양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다. 
예를 들어 18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수입니다. 
자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요.
*/

function solution(x) {
  var answer = (x + "")
    .split("")
    .map((i) => parseInt(i))
    .reduce((a, b) => a + b);
  console.log(x);
  console.log(answer);
  return x % answer == 0 ? true : false;
}

solution(10);
solution(12);
solution(11);
solution(13);

/*
🤖 다른 사람의 풀이

function solution(n) {
  return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
}

⚡️ reduce안의 +a, +b는 문자열을 숫자타입으로 변환시켜주는 역할을 한다!

📌 숫자에 문자열 붙이면 문자열로 변환!
let a = 1;
console.log(a); // 1
console.log(typeof a); // number
a = 1 + "";
console.log(a); // 1
console.log(typeof a); // string

📌 문자열에 (+,-)연산기호를 붙이면 숫자로 변환! 
📌 or 문자열에 숫자를 곱하거나 빼거나 나눠도 숫자로 변환! (숫자 더하기는 그대로 문자열)
a = "2";
console.log(a); // 2
console.log(typeof a); // string
a = +a;
console.log(a); // 2
console.log(typeof a); // number
a = -a;
console.log(a); // -2
console.log(typeof a); // number
a = a * 6;
console.log(a); // 12
console.log(typeof a); // number

*/
