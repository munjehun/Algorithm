/* - 문제 설명

이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다. 
각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다. 
제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다. 
(해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)

▣ 입력설명
첫 번째 줄에 문제의 개수 N(1<=N<=20)과 제한 시간 M(10<=M<=300)이 주어집니다. 
두 번째 줄부터 N줄에 걸쳐 문제를 풀었을 때의 점수와 푸는데 걸리는 시간이 주어집니다.

▣ 출력설명
첫 번째 줄에 제한 시간안에 얻을 수 있는 최대 점수를 출력합니다.
*/

// 제한시간을 넘기지 않는 모든 부분집합을 구하기
function solution(m, ps, pt) {
  let answer = 0;
  let n = ps.length;
  let check = Array.from({ length: n }, () => 0);

  function DFS(L) {
    if (L === n) {
      tmpT = 0;
      tmpS = 0;
      for (let i = 0; i < n; i++) {
        if (check[i] == 1) {
          tmpT += pt[i];
          tmpS += ps[i];
        }
      }
      if (tmpT <= m) answer = Math.max(answer, tmpS);
    } else {
      check[L] = 1;
      DFS(L + 1);
      check[L] = 0;
      DFS(L + 1);
    }
  }
  DFS(0);
  return answer;
}

let ps = [10, 25, 15, 6, 7]; //점수(score)
let pt = [5, 12, 8, 3, 4]; // 시간(time)
console.log(solution(20, ps, pt)); //41

/* - 다른 풀이

function solution(m, ps, pt) {
  let answer = 0;

  function DFS(L, sum, time) {
    if (time > m) return;
    if (L === ps.length) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  }
  DFS(0, 0, 0);

  return answer;
}
*/
