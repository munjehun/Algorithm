/*-문제 설명
정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
*/

function solution(n) {
  let answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      answer.push(i);
    }
    continue;
  }
  return answer.reduce((a, b) => a + b, 0);
}

solution(12); //28
solution(5); //6

/*
🤖 다른 사람의 풀이

function solution(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) sum += i
    }
    return sum
}

⚡️ 배열을 만들어서 추가하는 것이 아니라 바로 더하기
*/
