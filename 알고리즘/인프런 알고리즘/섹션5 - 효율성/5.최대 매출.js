/* - 문제 설명

현수의 아빠는 제과점을 운영합니다. 
현수 아빠는 현수에게 N일 동안의 매출기록을 주고 연속된 K일 동안의 최대 매출액이 얼마인지 구하라고 했습니다.
만약 N=10이고 10일 간의 매출기록이 아래와 같습니다. 이때 K=3이면 
12 15 11 20 25 10 20 19 13 15
연속된 3일간의 최대 매출액은 11+20+25=56만원입니다.
여러분이 현수를 도와주세요.

▣ 입력설명
첫 줄에 N(5<=N<=100,000)과 K(2<=K<=N)가 주어집니다.
두 번째 줄에 N개의 숫자열이 주어집니다. 각 숫자는 500이하의 음이 아닌 정수입니다.

▣ 출력설명
첫 줄에 최대 매출액을 출력합니다.
*/

// 2중 for문
function solution(k, arr) {
  let sum = 0;
  let lt = 0;
  let answer = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (rt >= k) {
      sum -= arr[lt++];
      answer = Math.max(answer, sum);
    }
  }

  return answer;
}

let a = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));

/* - 다른 풀이

💯 lt, rt가 아닌 for문에서 i하나로 풀이

function solution(k, arr) {
  let sum = (answer = 0);
  for (let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  for (let i = k; i < arr.length; i++) {
    sum = sum + arr[i] - arr[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
}
*/
