/* - 문제 설명

가장 윗줄에 1부터 N까지의 숫자가 한 개씩 적혀 있다. 
그리고 둘째 줄부터 차례대로 파스칼의 삼각형처럼 위의 두개를 더한 값이 저장되게 된다. 
예를 들어 N이 4 이고 가장 윗 줄에 3 1 2 4 가 있다고 했을 때, 다음과 같은 삼각형이 그려진다.

3 1 2 4
 4 3 6
  7 9
  16

N과 가장 밑에 있는 숫자가 주어져 있을 때 가장 윗줄에 있는 숫자를 구하는 프로그램을 작성하시오. 
단, 답이 여러가지가 나오는 경우에는 사전순으로 가장 앞에 오는 것을 출력하여야 한다.

▣ 입력설명
첫째 줄에 두개의 정수 N(1≤N≤10)과 F가 주어진다. 
N은 가장 윗줄에 있는 숫자의 개수를 의미하며 F는 가장 밑에 줄에 있는 수로 1,000,000 이하이다.

▣ 출력설명
첫째 줄에 삼각형에서 가장 위에 들어갈 N개의 숫자를 빈 칸을 사이에 두고 출력한다. 
답이 존재하지 않는 경우는 입력으로 주어지지 않는다.
*/

// 공식을 보면 답에 해당하는 배열에 원소의 각 순서에 3C0 3C1 3C2 3C3 을 곱해서 f가 나오게 된다.
// 조합을 for문으로 작성하여 조합의 배열을 만들고,
// 순열 공식을 이용하여, 각 순열과 조합의 같은 위치의 원소를 곱했을 때 f가 나오게 하면 된다!

function solution(n, f) {
  let answer;
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let p = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0); // 조합의 수 배열 1 3 3 1

  function combi(n, r) {
    if (dy[n][r]) return dy[n][r];
    if (n === r || r == 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  function DFS(L, sum) {
    if (answer) return;
    if (L === n && sum === f) {
      answer = p.slice();
    } else {
      for (let i = 1; i < ch.length; i++) {
        if (ch[i] == 0) {
          p[L] = i;
          ch[i] = 1;
          DFS(L + 1, sum + b[L] * p[L]);
          ch[i] = 0;
        }
      }
    }
  }
  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }

  DFS(0, 0);
  return answer;
}

console.log(solution(4, 16)); //3 1 2 4

function solution(n, f) {
  let answer;

  // 조합 구하기
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  let combiArr = [];

  function combi(n, r) {
    if (dy[n][r]) return dy[n][r];
    if (n == r || r == 0) return 1;
    else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
  }

  for (let i = 0; i < n; i++) {
    combiArr.push(combi(n - 1, i));
  }

  // 순열 구하기
  let check = Array.from({ length: n + 1 }, () => 0);
  let tmp = Array.from({ length: n }, () => 0);

  function DFS(L, sum) {
    if (answer) return;
    if (L === n && sum === f) {
      answer = tmp.slice();
    } else {
      for (let i = 1; i <= n; i++) {
        if (check[i] !== 1) {
          tmp[L] = i;
          check[i] = 1;
          DFS(L + 1, sum + tmp[L] * combiArr[L]);
          check[i] = 0;
        }
      }
    }
  }

  DFS(0, 0);

  return answer;
}
