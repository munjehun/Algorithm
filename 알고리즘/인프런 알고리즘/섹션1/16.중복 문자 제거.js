/* - 문제 설명

소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

▣ 입력설명
첫 줄에 문자열이 입력됩니다.

▣ 출력설명
첫 줄에 중복문자가 제거된 문자열을 출력합니다.
*/

function solution(s) {
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[i] === arr[j]) arr[j] = "";
    }
  }
  return arr.join("");
}

console.log(solution("ksekkset"));

/* - 다른 풀이

function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (i == s.indexOf(s[i])) answer += s[i]; 💯 중복 문자 찾기는 indexOf() 로 하면 편하다!
  }
  return answer;
}

*/
