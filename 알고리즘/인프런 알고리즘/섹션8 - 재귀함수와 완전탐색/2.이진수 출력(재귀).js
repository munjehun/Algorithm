/* - 문제 설명

10진수 N이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요. 단 재귀함수를 이용해서 출력해야 합니다.

▣ 입력설명
첫 번째 줄에 10진수 N(1<=N<=1,000)이 주어집니다.

▣ 출력설명
첫 번째 줄에 이진수를 출력하세요.

*/

function solution(n) {
  let answer = "";

  function DFS(num) {
    if (num === 0) return;

    DFS(parseInt(num / 2));
    answer += num % 2;
  }

  DFS(n);
  return answer;
}

console.log(solution(11));
