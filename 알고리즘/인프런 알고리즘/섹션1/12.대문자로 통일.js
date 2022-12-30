/* - 문제 설명

대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 대문자로 통일된 문자열이 출력된다.
*/

function solution(s) {
  return s.toUpperCase();
}

let str = "ItisTimeToStudy";
console.log(solution(str));

/* - 다른 풀이 1

function solution(s) {
  let answer = "";
  for (let i of s) {
    if (i === i.toLowerCase()) {
      answer += i.toUpperCase();
    } else answer += i;
  }
  return answer;
}

- 다른 풀이 2

function solution(s) {
  let answer = "";
  for (let i of s) {
    let num = i.charCodeAt();
    if (num >= 97 && num <= 122) {
      answer += String.fromCharCode(num - 32); 💯 String.fromCharCode : 인자로 들어온 유니코드를 문자열로 반환
    } else answer += i;
  }
  return answer;
}

*/
