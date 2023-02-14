/* - 문제 설명

전위순회와 후위순회를 연습해보세요.

전위순회 : 부모노드 -> 왼쪽 자식노드 -> 오른쪽 자식노드
중위순회 : 왼쪽 자식노드 -> 부모노드 -> 오른쪽 자식노드
후위순회 : 왼쪽 자식노드 -> 오른쪽 자식노드 -> 부모노드

*/

// function solution(n) {
//   let answer;
//   function DFS(n) {
//     if (n > 7) {
//       return;
//     } else {
//       console.log(n); //부모 노드 출력 (전위 순회)
//       DFS(n * 2);
//       // console.log(n); //중위 순회
//       DFS(n * 2 + 1);
//       // console.log(n); //후위 순회
//     }
//   }

//   DFS(n);
//   return answer;
// }

function solution(m) {
  if (m > 7) return;
  else {
    console.log(m); //부모 노드 출력 (전위 순회)
    solution(m * 2);
    // console.log(m); //(중위 순회)
    solution(m * 2 + 1);
    // console.log(m); //(후위 순회)
  }
}
console.log(solution(1));

/*
전위순회 출력 : 1 2 4 5 3 6 7
중위순회 출력 : 4 2 5 1 6 3 7
후위순회 출력 : 4 5 2 6 7 3 7
*/
