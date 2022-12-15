/*-문제 설명
두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수를 완성하세요.
예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
*/

function solution(a, b) {
  let answer = 0;
  if (a < b) {
    for (let i = a + 1; i < b + 1; i++) {
      a = a + i;
      answer = a;
    }
  } else if (a === b) {
    answer = a;
  } else {
    for (let i = b + 1; i < a + 1; i++) {
      b = b + i;
      answer = b;
    }
  }
  return answer;
}

solution(3, 5);
solution(3, 3);
solution(5, 3);

// 다른 사람의 풀이
function adder(a, b, s = 0) {
  for (var i = Math.min(a, b); i <= Math.max(a, b); i++) s += i;
  return s;
}
