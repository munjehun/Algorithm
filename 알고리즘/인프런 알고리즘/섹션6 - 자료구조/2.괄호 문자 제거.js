/* - 문제 설명

입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
남은 문자만 출력한다
*/

function solution(s) {
  let bracket = 0;
  let answer = "";
  for (let i of s) {
    if (i == "(") bracket++;
    else if (i == ")") bracket--;
    else if (bracket == 0) answer += i;
  }
  return answer;
}

let str = "(A(BC)D)EF(G(H)(IJ)K)LM(N)";
console.log(solution(str)); //EFLM

/* - 다른 풀이

function solution(s) {
  let stack = [];
  for (let x of s) {
    if (x === ")") {
      while (stack.pop() !== "("); 💯 while문 안에 조건문에서 바로 함수를 실행할 수 있다.
    } else stack.push(x);
  }
  return stack.join("");
}

💯 배열.pop() 은 배열의 마지막 요소를 제거한 후의 배열을 반환한다. 원본 배열 자체를 수정한다! => while문에서 조건절에 pop()만 써도 된다.
*/
