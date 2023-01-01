/* - 문제 설명

N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작성하세요.
(첫 번째 수는 무조건 출력한다)

▣ 입력설명
첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.

▣ 출력설명
자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다
*/

function solution(arr) {
  let answer = arr.filter((i, index, arr) => i > arr[index - 1]);
  answer.unshift(arr[0]);
  return answer;
}

let arr = [7, 3, 9, 5, 6, 12];
console.log(solution(arr));

/* - 다른 풀이

function solution(arr) {
  let answer = [];
  answer.push(arr[0]);
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

*/
