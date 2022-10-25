/*-문제 설명

짝지어 제거하기는 알파벳 소문자로 이루어진 문자열을 가지고 시작합니다. 
먼저 문자열에서 같은 알파벳이 2개 붙어 있는 짝을 찾습니다. 그다음, 그 둘을 제거한 뒤, 앞뒤로 문자열을 이어 붙입니다. 
이 과정을 반복해서 문자열을 모두 제거한다면 짝지어 제거하기가 종료됩니다. 
문자열 S가 주어졌을 때, 짝지어 제거하기를 성공적으로 수행할 수 있는지 반환하는 함수를 완성해 주세요. 
성공적으로 수행할 수 있으면 1을, 아닐 경우 0을 리턴해주면 됩니다.

예를 들어, 문자열 S = baabaa 라면

b aa baa → bb aa → aa →

의 순서로 문자열을 모두 제거할 수 있으므로 1을 반환합니다.
*/

function solution(s) {
  s = s.split("");
  return dupliCheck(s).length == 0 ? 1 : 0;
}

function dupliCheck(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      s.splice(i, 2);
      dupliCheck(s);
    }
  }
  console.log(s);
  return s;
}

solution("baabaa");
solution("cdcd");
solution("cdccddddcdcdddcd");

// 틀리지는 않는데 재귀로 하니 런타임 에러가 뜬다! 다른 방법으로 풀어야 할 것 같다.

/*
🤖 다른 사람의 풀이 1️⃣

function solution(s){
  const strArr = s.split("");

    for(let i = 0 ; i < strArr.length-1 ; i++){
      if(strArr[i] === strArr[i+1]){
          strArr.splice( i, 2 );
            i = -1; 👉 i를 다시 마이너스로 돌아갈 수도 있다!!
      }
  }

return strArr.length === 0 ? 1 : 0;
}

⚡️ for문에서 i를 마이너스로 해서 이전 i로 돌아갈 수도 있다!!
⚠️ 시간초과 실패 (런타임 에러와 다른 실패인가 봄)


🤖 다른 사람의 풀이 2️⃣

function solution(s) {

  const stack = [];

  for(let i = 0 ; i < s.length ; i++ ){
    stack[stack.length-1] !== s[i] ? stack.push(s[i]) : stack.pop()
  }

  return stack.length ? 0 : 1;
}

⚡️ 스택에 마지막에 있는 char가 현재 index와 같지 않다면 stack에 현재 index의 char를 Push한다.
⚡️ stack이 비어있지 않은데, 스택의 마지막 char가 현재의 Index와 같다면 pop()을 한다.
💯 스택이라는 개념에 익숙해져야 겠다.
*/
