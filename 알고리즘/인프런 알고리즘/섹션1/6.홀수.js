/* - 문제 설명

7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 
고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

예를 들어, 7개의 자연수 12, 77, 38, 41, 53, 92, 85가 주어지면 이들 중 홀수는 77, 41, 53, 
85이므로 그 합은
77 + 41 + 53 + 85 = 256
이 되고,
41 < 53 < 77 < 85
이므로 홀수들 중 최소값은 41이 된다.


▣ 입력설명
첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.

▣ 출력설명
첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.

*/
function solution(arr) {
  let odd = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 1) odd.push(arr[i]);
  }

  let sum = odd.reduce((a, b) => a + b, 0);
  let minOdd = Math.min(...odd);

  return [sum, minOdd];
}

arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

/* 다른 풀이
function solution(arr){
  let answer = [];
  let sum = 0, min = Number.MAX_SAFE_INTEGER;
  for(let i of arr){
    if(i % 2 === 1){
      sum += i;
      if(i<min) min = i;
    }
  }
  answer.push(sum);
  answer.push(min);
  return answer;
}
*/
