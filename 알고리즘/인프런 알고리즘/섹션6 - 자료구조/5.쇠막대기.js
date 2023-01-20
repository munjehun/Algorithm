/* - 문제 설명

쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때, 잘려진 쇠막대기 조각의 총 개수를 구하는 프로그램을 작성하시오.

▣ 입력설명
한 줄에 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 공백없이 주어진다. 괄호 문자의 개수는 최대 100,000이다. 

▣ 출력설명
잘려진 조각의 총 개수를 나타내는 정수를 한 줄에 출력한다.
*/

//직전에 '(' 가 있고 ')'면 '('의 수만큼 플러스
function solution(s) {
  let stack = [];
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == "(") stack.push(s[i]);
    if (s[i] == ")") {
      stack.pop();
      if (s[i - 1] == "(") {
        answer += stack.length;
      } else {
        answer++;
      }
    }
  }
  return answer;
}

let a = "()(((()())(())()))(())";
console.log(solution(a)); // 17

a = "(((()(()()))(())()))(()())";
console.log(solution(a)); // 24
