/* - 문제 설명

길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 “YES"를 출력하고, 
만들 수 없으면 ”NO"를 출력한다.

▣ 입력설명
첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.

▣ 출력설명
첫 번째 줄에 “YES", "NO"를 출력한다.
*/

function solution(a, b, c) {
  let triangle = [];
  triangle.push(a, b, c);
  triangle.sort((a, b) => a - b);

  return triangle[0] + triangle[1] <= triangle[2] ? "NO" : "YES";
}

console.log(solution(13, 33, 17));
console.log(solution(6, 7, 11));
