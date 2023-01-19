/* - 문제 설명

괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
(())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

▣ 입력설명
첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30이다. 

▣ 출력설명
첫 번째 줄에 YES, NO를 출력한다.
*/

function solution(s) {
  let answer = 0;
  for (i of s) {
    i === "(" ? answer++ : answer--;
    if (answer < 0) return "NO";
  }

  return answer === 0 ? "YES" : "NO";
}

let a = "(()(()))(()";
console.log(solution(a)); //NO
a = "(()(()))(())";
console.log(solution(a)); //YES
a = "(()(()))(()))";
console.log(solution(a)); //NO

/* - 다른 풀이

function solution(s) {
  let answer = "YES";
  stack = [];
  for (let i of s) {
    if (i === "(") stack.push(i);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";

  return answer;
}

💯 stack을 이용한 것을 표현하기 위해 배열로 풀이!
❗️❗️ 프로그래머스 알고리즘 레벨2의 '올바른 괄호'와 같은 문제
*/
