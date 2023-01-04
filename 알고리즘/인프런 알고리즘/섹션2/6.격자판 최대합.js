/* - 문제 설명

5*5 격자판에 아래롸 같이 숫자가 적혀있습니다.

10 13 10 12 15
12 39 30 23 11
11 25 50 53 15
19 27 29 37 27
19 13 30 13 19

N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(1<=N<=50) 
두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다. 

▣ 출력설명
최대합을 출력합니다.
*/

function solution(arr) {
  let sum = [];
  let col = Array.from({ length: arr.length }, () => []);
  let cross = 0;
  let reverseCross = 0;

  // 행의 합
  for (let i of arr) {
    sum.push(i.reduce((a, b) => a + b));
  }

  // 열의 합
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      col[j].push(arr[i][j]);
    }
  }

  for (let i of col) {
    sum.push(i.reduce((a, b) => a + b));
  }

  // 대각선의 합
  for (let i = 0; i < arr.length; i++) {
    cross += arr[i][i];
    reverseCross += arr[i][arr.length - i - 1];
  }

  return Math.max(...sum, cross, reverseCross);
}

let arr = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
console.log(solution(arr));

/* - 다른 풀이

function solution(arr) {
  let answer = 0;
  let sum1,
    sum2 = 0;
  let cross = 0;
  let reverseCross = 0;

  for (let i = 0; i < arr.length; i++) {
    cross += arr[i][i];
    reverseCross += arr[i][arr.length - i - 1];
    sum1 = sum2 = 0; //sum 초기화

    for (let j = 0; j < arr.length; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(cross, reverseCross, sum1, sum2, answer);
  }
  return answer;
}

💯 대각선 더하기는 for문 안에서

  cross += arr[i][i];
  reverseCross += arr[i][arr.length - i - 1];

  인것을 기억하자!

*/
