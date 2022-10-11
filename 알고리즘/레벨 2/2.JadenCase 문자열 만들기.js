/*-문제 설명

JadenCase란 모든 단어의 첫 문자가 대문자이고, 그 외의 알파벳은 소문자인 문자열입니다. 
단, 첫 문자가 알파벳이 아닐 때에는 이어지는 알파벳은 소문자로 쓰면 됩니다. 
문자열 s가 주어졌을 때, s를 JadenCase로 바꾼 문자열을 리턴하는 함수를 완성해주세요.
*/

function solution(s) {
  return s
    .replace(/\w/g, (i) => i.toLowerCase())
    .replace(/\b[a-z]/g, (i) => i.toUpperCase());
}

solution("3people unFollowed me");

//=>💯 문자열.replace(정규식, 바꿀 문자) 의 형태로도 쓸 수 있지만,
//문자열.replace(정규식, 해당문자=> 함수 적용) 으로도 활용할 수 있다!

/*
🤖 다른 사람의 풀이

function solution(s) {
    return s.split(" ").map(v => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase()).join(" ");
}

⚡️ map문으로 여러가지 항을 만들어서 적용할 수 있다.
⚡️ 문자열.substring(시작 인덱스, 끝 인덱스) = 문자열의 시작 인덱스부터 끝 인덱스의 앞까지 잘라낸다.
    slice와 동일?!
*/
