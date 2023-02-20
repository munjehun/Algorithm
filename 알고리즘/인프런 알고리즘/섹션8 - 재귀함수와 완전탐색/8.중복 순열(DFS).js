/* - 문제 설명

1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력합니다.

▣ 입력설명
첫 번째 줄에 자연수 N(3<=N<=10)과 M(2<=M<=N) 이 주어집니다.

▣ 출력설명
첫 번째 줄에 결과를 출력합니다. 맨 마지막 총 경우의 수를 출력합니다.
출력순서는 사전순으로 오름차순으로 출력합니다.
*/

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: 0 }, () => 0);

  function DFS(L) {
    if (L == m) {
      answer.push(tmp.slice()); //tmp의 복사본을 푸쉬 (tmp는 계속 바뀌기 때문!)
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);

  return [answer, answer.length];
}

console.log(solution(3, 3));

// 다중 for문이 아니라 재귀로 하는 이유! : for문을 m의 수에따라 계속 추가하거나 삭제해야 한다.
