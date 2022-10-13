/*-문제 설명
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 

예를 들어
"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.

'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 
올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
*/

//'('의 갯수와 ')'의 갯수가 같으면 true, 다르면 false 리턴.
//')' 쓸 때마다 앞에 최소 ')'의 갯수 이상으로 '('가 있어야 함
function solution(s) {
  s = s.split("");
  let openCount = 0;
  let closeCount = 0;
  if (s[0] == "0") return false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      openCount += 1;
    } else if (s[i] === ")") {
      closeCount += 1;
      if (openCount < closeCount) {
        return false;
      }
    }
  }
  return s[0] === "(" && openCount == closeCount && s[s.length - 1] === ")";
}

solution(")()(");
solution("()()");

//🥵 if (s[0] == "0") return false; 를 넣어주지 않으면 효율성테스트에서 실패로 뜬다. 왜지?

/*
🤖 다른 사람의 풀이

function solution(s){
    let cum = 0
    for (let paren of s) {
        cum += paren === '('? 1: -1
        if(cum < 0) {
            return false
        }
    }
    return cum === 0? true: false;
}

⚡️ openCount와 closeCount로 나눠서 했던걸 cum 하나로 해결.
⚡️ for of 를 사용
*/
