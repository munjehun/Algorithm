/* - 문제 설명

N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력하는 프로그램을 작성하세요. 
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 10,000,000를 넘지 않는다.

▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.
*/

function solution(n, arr) {
  let answer = [];
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    answer.push(
      arr[i]
        .toString()
        .split("")
        .reduce((a, b) => +a + +b)
    );
  }
  max = Math.max(...answer);
  return Math.max(
    ...answer.map((i, index) => (i === max ? (i = arr[index]) : 0))
  );
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(7, arr));

/* - 다른 풀이 1

function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
    
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

- 다른 풀이 2

function solution(n, arr) {
  let answer,
    max = 0;
    
  for (let x of arr) {
    let sum = .toString().split("").reduce((a, b) => +a + +b);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}
*/
