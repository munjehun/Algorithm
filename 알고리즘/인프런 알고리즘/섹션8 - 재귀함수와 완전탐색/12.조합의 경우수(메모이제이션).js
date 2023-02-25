/* - 문제 설명

다음 공식을 사용하여 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요. 

nCr = (n-1)C(r-1) + (n-1)Cr

▣ 입력설명
첫째 줄에 자연수 n(3<=n<=33)과 r(0<=r<=n)이 입력됩니다.

▣ 출력설명
첫째 줄에 조합수를 출력합니다.
*/

function solution(n, r) {
  if (n === r || r == 0) {
    return 1;
  } else return solution(n - 1, r - 1) + solution(n - 1, r);
}

console.log(solution(5, 3));
console.log(solution(33, 19));

// 메모이제이션 사용
// 💯 메모이제이션 : 동일한 계산을 반복해야 할 때, 이전에 계산한 값을 메모리에 저장함으로써 동일한 계산의 반복 수행을 제거

function solution(n, r) {
  let dy = Array.from(Array(n + 1), () => Array(r + 1).fill(0));
  // n+1행 r+1열의 빈 배열을 만든다.
  // 💯 Array(n) : 빈 원소가 n개인 배열 생성

  function DFS(n, r) {
    if (dy[n][r]) return dy[n][r];
    if (n === r || r == 0) {
      return 1;
    } else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  }
  let answer = DFS(n, r);

  return answer;
}
