/* - 문제 설명

자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요. 

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=10)이 주어집니다.

▣ 출력설명
첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다. 
단 공집합은 출력하지 않습니다.
*/

function solution(n) {
  let answer = [];
  let check = Array.from({ length: n + 1 }, () => 0); // 각 숫자가 포함되는지 안되는지 체크리스트를 만든다.

  function DFS(v) {
    if (v > n) {
      let tmp = "";

      // 체크리스트의 각 숫자 자리에 1이 있으면 그 숫자를 tmp에 붙이기
      for (let i = 1; i <= n; i++) {
        if (check[i] == 1) tmp += i;
      }
      if (tmp.length >= 1) answer.push(tmp);
    } else {
      check[v] = 1;
      DFS(v + 1);
      check[v] = 0;
      DFS(v + 1);
    }
  }
  DFS(1); // 1에서 n까지의 부분집합
  return answer;
}

console.log(solution(3));

/*
1 2 3
1 2
1 3
1
2 3
2
3
*/
