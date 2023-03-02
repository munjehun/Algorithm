/* - 문제 설명

10이하의 N개의 자연수가 주어지면 이 중 M개를 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.
두 번째 줄에 N개의 자연수가 오름차순으로 주어집니다.

▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.
*/

function solution(m, arr) {
  let answer = [];
  let n = arr.length;
  let tmp = Array.from({ length: m }, () => 0);
  let check = Array.from({ length: n }, () => 0);
  function DFS(L) {
    if (L == m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < n; i++) {
        if (check[i] !== 1) {
          tmp[L] = arr[i]; //tmp에 숫자 넣어주기
          check[i] = 1;
          DFS(L + 1);
          check[i] = 0; //❗️ 턴이 끝나면 체크를 풀어주는 게 중요 ❗️
        }
      }
    }
  }
  DFS(0);

  return [
    answer.sort((a, b) => (a[0] == b[0] ? a[1] - b[1] : a[0] - b[0])),
    answer.length,
  ];
}

let arr = [3, 12, 6, 9];
console.log(solution(2, arr));
