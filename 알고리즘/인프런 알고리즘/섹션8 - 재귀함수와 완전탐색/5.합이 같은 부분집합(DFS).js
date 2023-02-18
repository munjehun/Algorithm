/* - 문제 설명

N개의 원소로 구성된 자연수 집합이 주어지면, 
이 집합을 두 개의 부분집합으로 나누었을 때 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고, 
그렇지 않으면 ”NO"를 출력하는 프로그램을 작성하세요.

둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며, 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 합니다.

예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있다.

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.
두 번째 줄에 집합의 원소 N개가 주어진다. 각 원소는 중복되지 않으며, 그 크기는 1,000,000이하입니다.

▣ 출력설명
첫 번째 줄에 “YES" 또는 ”NO"를 출력한다.
*/

// 부분집합의 원소의 합은 원본배열 원소의 합의 반이 되어야 한다. 그래야 서로소인 두 부분집합이 같아지기 때문.
function solution(arr) {
  let check = Array.from({ length: arr.length }, () => 0);
  let half = arr.reduce((a, b) => a + b) / 2;
  let answer = "NO";

  function DFS(n) {
    if (n > arr.length) {
      let tmp = [];
      for (let i = 1; i < arr.length; i++) {
        if (check[i] == 1) tmp.push(arr[i]);
      }
      if (tmp.length > 0 && tmp.reduce((a, b) => a + b) == half) {
        console.log(tmp);
        answer = "YES";
      }
    } else {
      check[n] = 1;
      DFS(n + 1);
      check[n] = 0;
      DFS(n + 1);
    }
  }

  DFS(0);

  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr));

/* - 다른 풀이

function solution(arr) {
  let answer = "NO";
  let total = arr.reduce((a, b) => a + b);
  let n = arr.length;

  function DFS(L, sum) {
    // 💯 L은 레벨이라는 뜻으로 많이 쓰임
    if (answer == "YES" || L > n || sum > total / 2) return;

    if (total / 2 === sum) {
      answer = "YES";
    } else {
      DFS(L + 1, sum + arr[L]);
      DFS(L + 1, sum);
    }
  }
  DFS(0, 0);
  return answer;
}
*/
