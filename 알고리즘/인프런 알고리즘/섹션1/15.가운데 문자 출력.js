/* - 문제 설명

소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 가운데 문자를 출력합니다.
*/
function solution(s) {
  return s.length % 2
    ? s.substr(Math.floor(s.length / 2), 1)
    : s.substr(s.length / 2 - 1, 2);
}

console.log(solution("study"));
console.log(solution("good"));

/*
function solution(s) {
  let mid = Math.floor(s.length / 2);

  return s.length % 2
    ? s.substring(mid, mid + 1) 💯 substring 대신 slice를 사용 가능!
    : s.substring(mid - 1, mid + 1);
}
*/
