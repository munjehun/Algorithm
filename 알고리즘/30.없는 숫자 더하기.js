/*-문제 설명
0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다.
numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 함수를 완성하세요.
*/

function solution(numbers) {
  let result = 0;
  for (let i = 0; i < 10; i++) {
    if (!numbers.includes(i)) {
      result += i;
    }
  }
  return result;
}

solution([1, 2, 3, 4, 6, 7, 8, 0]);
solution([5, 8, 4, 0, 6, 7, 9]);

/*
🤖 다른 사람의 풀이

function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

⚡️ 1~9까지 다 더하면 45인것을 이용해서 없는 수만큼 빠진 수를 리턴하게 응용
*/
