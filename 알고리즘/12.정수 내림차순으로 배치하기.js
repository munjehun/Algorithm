/*-문제 설명
함수 solution은 정수 n을 매개변수로 입력받습니다. 
n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 
예를들어 n이 118372면 873211을 리턴하면 됩니다.
*/

function solution(n) {
  return Number(
    n
      .toString() // 배열로 만들기 위해 문자화
      .split("") //배열로 만들기
      .sort((a, b) => b - a) //내림차순 정렬
      .reduce((a, b) => a + b) //숫자 더하기
  );
}

/*
💯 split(separator, limit) : 지정한 구분자를 이용하여 여러 개의 문자열로 나누어 배열을 만듭니다.

separator

- 원본 문자열을 끊어야 할 부분을 나타내는 문자열을 나타냅니다. 실제 문자열이나 정규표현식을 받을 수 있습니다.
- 문자열 유형의 separator가 두 글자 이상일 경우 그 부분 문자열 전체가 일치해야 끊어집니다. 
- separator가 생략되거나 str에 등장하지 않을 경우, 반환되는 배열은 원본 문자열을 유일한 원소로 가집니다.
- 📌 separator가 빈 문자열일 경우 str의 각각의 문자가 배열의 원소 하나씩으로 변환됩니다.

limit (옵션)

- 끊어진 문자열의 최대 개수를 나타내는 정수입니다.
- 이 매개변수를 전달하면 split() 메서드는 주어진 separator가 등장할 때마다 문자열을 끊지만 배열의 원소가 limit개가 되면 멈춥니다.
*/

/*
🤖다른 사람의 풀이

function solution(n) {
  return parseInt((n + "").split("").sort().reverse().join(""));
}

📢 reverse() = 배열의 순서를 반전합니다.
📢 join() = 배열의 모든 요소를 연결해 하나의 문자열로 만듭니다.

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join()); // "Fire,Air,Water"
console.log(elements.join('')); // "FireAirWater"
*/

solution(64813);
