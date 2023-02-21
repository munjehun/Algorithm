/* - 문제 설명

다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가? 
각 단위의 동전은 무한정 쓸 수 있다.

▣ 입력설명
첫 번째 줄에는 동전의 종류 개수 N(1<=N<=12)이 주어진다. 
두 번째 줄에는 N개의 동전의 종류가 주어지고, 그 다음줄에 거슬러 줄 금액 M(1<=M<=500)이 주어진다. 
각 동전의 종류는 100원을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 거슬러 줄 동전의 최소개수를 출력한다.
*/

function solution(m, arr) {
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    if (sum > m) return;
    if (L >= answer) return; //효율성을 위해 추가
    if (sum == m) {
      console.log(L, sum);
      answer = Math.min(L, answer);
    } else {
      for (let i = 0; i < arr.length; i++) {
        DFS(L + 1, sum + arr[i]);
      }
    }
  }

  DFS(0, 0); //동전 갯수, 동전 금액의 합
  return answer;
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
