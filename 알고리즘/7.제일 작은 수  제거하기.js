/*
정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 
단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 
예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.

- 제한 조건
arr은 길이 1 이상인 배열입니다.
인덱스 i, j에 대해 i ≠ j이면 arr[i] ≠ arr[j] 입니다.
*/
// 1.제일 작은 원소를 구한다.
// 2.배열에서 제거한다.
// 3.배열의 길이가 0이면 -1을 push한다.

let a = [4, 3, 2, 1, 5];
let b = [10];

function solution(arr) {
  c = arr.reduce((a, b) => {
    return a < b ? a : b;
  });
  // console.log("c:", c);
  let answer = arr.filter((i) => i !== c);
  // console.log("answer:", answer);
  if (answer.length === 0) answer.push(-1);
  // console.log(answer);
  return answer;
}

solution(a); //[4,3,2,5]
solution(b); //[-1]

/*
🤖다른 사람의 풀이

function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);  => 배열에서 제일 작은 수 하나를 제거!
    if(arr.length<1)return[-1];
    return arr;
}

=> splice, indexOf, Math.min 사용!
*/
