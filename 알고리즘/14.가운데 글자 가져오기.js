/*-문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
*/

function solution(s) {
  if (s.length % 2 == 0) {
    return s[s.length / 2 - 1] + s[s.length / 2];
  } else {
    return s[Math.floor(s.length / 2)];
  }
}

solution("abcde"); //c
solution("abcd"); //bc
solution("abcdefgh"); //de

/*
🤖다른 사람의 풀이

function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
}

⚡️ substr사용, if문은 삼항연산자로 하는 연습!!

📢 substr() : 문자열에서 특정 위치에서 시작하여 특정 문자 수 만큼의 문자들을 반환

    str.substr(1, 4) => str의 인덱스 1에서부터 4글자를 반환

📢 substring() : 문자열에서 시작 인덱스로 부터 종료 인덱스 전 까지 부분 문자열을 반환

    str.substring(1, 4) => str의 인덱스 1에서부터 인덱스 4의 전(인덱스 3)까지 문자열을 반환 
*/
