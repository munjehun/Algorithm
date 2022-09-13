/*-문제 설명
두 정수 left와 right가 매개변수로 주어집니다. 
left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
 */
/*
1.left부터 right까지 가면서 약수의 갯수 구하기
2.배열로 만들어서 짝수에 해당하는 인덱스는 더하고 홀수에 해당하는 수는 뺀다.
*/
function solution(left, right) {
  let arr = [];
  let 약수갯수 = [];

  for (let i = left; i <= right; i++) {
    arr.push(i);
    let 약수 = [];
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        약수.push(j);
      }
    }
    약수갯수.push(약수.length);
  }

  return 약수갯수
    .map((i, index) => {
      return i % 2 ? -arr[index] : arr[index];
    })
    .reduce((acc, cur) => acc + cur, 0);
}

solution(13, 17); //43
solution(24, 27); //52

/*
🤖 다른 사람의 풀이 1️⃣

function solution(left, right) {
  let answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count % 2) answer -= i;
    else answer += i;
  }

  return answer;
}

⚡️ 굳이 약수의 갯수를 담은 배열을 만들지 않고 약수 갯수가 짝수면 +, 홀수면 -

🤖 다른 사람의 풀이 2️⃣

function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}

⚡️ 제곱근이 정수면 약수의 갯수가 홀수인 것을 이용한 풀이

📢 Number.isInteger() : 파라미터로 입력받은 값이 정수인지 판별
*/
