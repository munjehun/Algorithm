/*-문제 설명
문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 
각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수를 완성하세요.

-제한 사항
◽️ 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
◽️ 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.
*/

function solution(s) {
  s = s.split(" ").map((i) => i.split(""));

  for (let i = 0; i < s.length; i++) {
    s[i] = s[i]
      .map((j, index) => {
        return index % 2 == 0 ? j.toUpperCase() : j.toLowerCase();
      })
      .join("");
  }
  return s.join(" ");
}

solution("try hello world"); //TrY HeLlO WoRlD

/*
🤖 다른 사람의 풀이

function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}

⚡️ 정규식으로 풀이!
toUpperCase()로 문자열을 대문자로, replace()로 문자를 변경

📢 a.replace(b,c) : a에서 b에 매칭되는 항목을 c로 변환
    └ /(\w)(\w)/g : 영어 알파벳, 숫자, 언더스코어 중에 2글자
    └ function (a) : c에 함수를 넣어도 된다! b에 매치하는 것을 a로 두고 풀이했다.
*/
