/* - 문제 설명

N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
만약 N=8, M=6이고 수열이 다음과 같다면
1 2 1 3 1 1 1 2 

합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 
수열의 원소값은 1,000을 넘지 않는 자연수이다.

▣ 출력설명
첫째 줄에 경우의 수를 출력한다.
*/
// 💯 투 포인터 알고리즘의 대표예제!!

// 이중 for문으로 하면 시간복잡도는 n^2지만 투포인터로 하면 시간복잡도는 n이다!

function solution(m, arr) {
  let lt = 0;
  let sum = 0;
  let answer = 0;
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === m) answer++;
    while (sum >= m) {
      sum -= arr[lt++];
      if (sum === m) answer++; //더할 때도 합이 m과 같은지 확인하고, 뺄 때도 확인!
    }
  }

  return answer;
}

let a = [1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));

/* - 2중 for문 풀이

function solution(m, arr) {
  let sum = 0;
  let answer = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    for (let j = 0; j < arr.length; j++) {
      sum += arr[j];
      if (sum > m) {
        sum = 0;
        break;
      } else if (sum == m) answer++;
    }
  }
  return answer;
}

*/
