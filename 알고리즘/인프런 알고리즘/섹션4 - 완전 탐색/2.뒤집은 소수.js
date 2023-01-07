/* - 문제 설명

N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요. 
예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 
첫 자리부터의 연속된 0은 무시한다.

▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
각 자연수의 크기는 100,000를 넘지 않는다.

▣ 출력설명
첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.
*/

//소수 판별 함수
function isPrime(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

function solution(num) {
  let answer = [];
  for (let i of num) {
    let reverseNum = Number(i.toString().split("").reverse().join(""));
    if (isPrime(reverseNum)) answer.push(reverseNum);
  }
  return answer;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));

/* - 숫자 뒤집기 다른 풀이

function solution(num) {
  for (let i of num) {
    let reverseNum = 0;
    💯 나눌 수를 10으로 나눈 나머지를 계속 붙이는 방식, 나눌 수는 나누기 10으로 자릿수 계속 줄이기 => 나눌 수가 1자릿수가 되면 종료 
    while (i) { 
      let t = i % 10;
      reverseNum = reverseNum * 10 + t;
      i = parseInt(x / 10);
    }
  }
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
*/
