/*-문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)
*/

let solution = (n) => {
  let arr = Array(n + 1) //n+1만큼 원소의 수를 가지는 배열 생성
    .fill(true) //원소를 모두 true로 변경
    .fill(false, 0, 2); //0~1 인덱스를 false로 변경
  console.log(arr);

  for (let i = 2; i * i <= n; i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        arr[j] = false;
      }
    }
  }
  console.log(arr.filter((e) => e).length);
  return arr.filter((e) => e).length;
};

solution(10);

/*
📢 에라토스테네스의 체 : 범위에서 합성수를 지우는 방식으로 소수를 찾는 방법.

n = 100 일 때,
2~n까지의 수가 있다.
2부터 n의 제곱근(10)까지의 소수의 배수들을 제외시키면 소수만 남는다.

1은 제거
지워지지 않은 수 중 제일 작은 2를 소수로 채택하고, 나머지 2의 배수를 모두 지운다.
지워지지 않은 수 중 제일 작은 3을 소수로 채택하고, 나머지 3의 배수를 모두 지운다.
지워지지 않은 수 중 제일 작은 5를 소수로 채택하고, 나머지 5의 배수를 모두 지운다.
(반복)

위키백과 설명 : https://ko.wikipedia.org/wiki/%EC%97%90%EB%9D%BC%ED%86%A0%EC%8A%A4%ED%85%8C%EB%84%A4%EC%8A%A4%EC%9D%98_%EC%B2%B4
*/
