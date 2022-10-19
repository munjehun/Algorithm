/*-문제 설명
피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.

예를들어

F(2) = F(0) + F(1) = 0 + 1 = 1
F(3) = F(1) + F(2) = 1 + 1 = 2
F(4) = F(2) + F(3) = 1 + 2 = 3
F(5) = F(3) + F(4) = 2 + 3 = 5
와 같이 이어집니다.

2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.
*/

function solution(n) {
  let newArr = [0, 1];

  function fibonacci(n) {
    if (n <= 1) {
      return n;
    }
    newArr[n] = fibonacci(n - 2) + fibonacci(n - 1); //이것도 일종의 재귀, 재귀하면서 메모
    return newArr[n];
  }

  return fibonacci(n) % 1234567;
}

solution(3); //2
solution(5); //5

// 이것도 참조한건데 7~14번 런타임 에러남 😥 >> 재귀를 많이하면 에러나는 듯

/*
🤖 다른 사람의 풀이

function solution(n) {
    var answer = 0;
    answer = fibonacci1234567(n)
    return answer;
}

function fibonacci1234567(n){ ⚠️ 재귀적으로 하면 시간초과 👉 for문 사용
    let fiboArr = new Array(n+1).fill(0) 👉0으로 인덱스 n까지 채워진 배열 만들기
    fiboArr[0] = 0
    fiboArr[1] = 1
   for (let i = 2; i <= n; i++)
    fiboArr[i] = (fiboArr[i - 1] + fiboArr[i - 2]) % 1234567; 👉 1234567로 나눈 나머지로 하지 않으면 정수범위 초과
  return fiboArr[n];
}
*/
