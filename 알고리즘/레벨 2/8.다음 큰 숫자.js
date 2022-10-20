/*-문제 설명
자연수 n이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 합니다.

조건 1. n의 다음 큰 숫자는 n보다 큰 자연수 입니다.
조건 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같습니다.
조건 3. n의 다음 큰 숫자는 조건 1, 2를 만족하는 수 중 가장 작은 수 입니다.
예를 들어서 78(1001110)의 다음 큰 숫자는 83(1010011)입니다.

자연수 n이 매개변수로 주어질 때, n의 다음 큰 숫자를 return 하는 solution 함수를 완성해주세요.
*/

function solution(n) {
  let binCount = n.toString(2).match(/1/g).length;
  let nextN = n + 1;

  while (nextN <= 1000000) {
    nextBinCount = nextN.toString(2).match(/1/g).length;

    if (binCount == nextBinCount) {
      console.log(nextN);
      return nextN;
    }

    nextN += 1;
  }
}

solution(15);
solution(78);

// 💯 while문을 복습하자!
// 💯 숫자.toString(n) = 숫자를 n진수화

/*
🤖 다른 사람의 풀이

function solution(n) {
    var size = n.toString(2).match(/1/g).length
    while(n++) {
        if(size === n.toString(2).match(/1/g).length) return n
    }
}

⚡️ while 조건문 안에 n++를 넣을 수도 있다! n은 자연수이기 때문에 항상 true이기 때문!
*/
