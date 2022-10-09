/*-문제 설명
문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다. 
str에 나타나는 숫자 중 최소값과 최대값을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수를 완성하세요.
예를들어 s가 "1 2 3 4"라면 "1 4"를 리턴하고, "-1 -2 -3 -4"라면 "-4 -1"을 리턴하면 됩니다.
*/

//배열로 만들기
//제일 큰 수, 제일 작은 수 구하기
function solution(s) {
  s = s.match(/-?\d+/g).map((i) => +i);
  let answer = [];
  answer.push(Math.min(...s));
  answer.push(Math.max(...s));
  console.log(answer.join(" "));
  return answer.join(" ");
}

solution("11 21 31 41");
solution("1 2 3 4");
solution("-1 -1");

/*
🤖 다른 사람의 풀이

function solution(s) {
    const arr = s.split(' ');

    return Math.min(...arr)+' '+Math.max(...arr);
}

❗️❓ s.split이 안돼서 다르게 풀이했는데 되네..? 오타가 있었나,,
⚡️ 최댓값, 최솟값은 Math.max, Math.min 사용하기 리마인드
*/
