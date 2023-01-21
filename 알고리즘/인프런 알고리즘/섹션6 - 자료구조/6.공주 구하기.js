/* - 문제 설명

예를 들어 총 8명의 왕자가 있고, 3을 외친 왕자가 제외된다고 하자. 
처음에는 3번 왕자가 3을 외쳐 제외된다. 
이어 6, 1, 5, 2, 8, 4번 왕자가 차례대로 제외되고 마지막까지 남게 된 7번 왕자에게 공주를 구하러갑니다.
N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.

▣ 입력설명
첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다.

▣ 출력설명
첫 줄에 마지막 남은 왕자의 번호를 출력합니다.
*/

function solution(n, k) {
  let queue = Array.from({ length: n }, (value, index) => index + 1);
  console.log(queue);

  while (queue.length > 1) {
    for (let i = 1; i < k; i++) queue.push(queue.shift());
    queue.shift();
  }
  return queue;
}

console.log(solution(8, 3)); //7

/*
💯 Array.from() : 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만듭니다.
  
  ex) Array.from({ length: 5 }, (value, index) => i);  // [0, 1, 2, 3, 4]
      Array.from("foo"); // [ "f", "o", "o" ]
      Array.from([1, 2, 3], x => x + x); // [2, 4, 6]

💯 queue : stack이 후입선출이었다면 queue는 선입선출


❗️❗️ arr.shift() : 배열의 첫 번째 인덱스 요소 삭제
❗️❗️ arr.unshift() : 배열의 첫 번째 인덱스에 요소 추가
=> 알고 있었는데 안쓰다 보니 헷갈렸다..
*/
