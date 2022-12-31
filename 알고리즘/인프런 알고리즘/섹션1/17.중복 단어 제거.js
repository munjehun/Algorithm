/* - 문제 설명

N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
출력하는 문자열은 원래의 입력순서를 유지합니다.

▣ 입력설명
첫 줄에 자연수 N이 주어진다.(3<=N<=30)
두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄부터 중복이 제거된 문자열을 차례로 출력한다
*/

function solution(s) {
  return s.filter((i, index) => index == s.indexOf(i));
}

let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));

/* - 다른 풀이 1

function solution(s) {
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length - 1; j++) {
      if (s[i] == s[j]) s[j] = "";
    }
  }
  return s.filter((i) => i);
}

- 다른 풀이 2

function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (i == s.indexOf(s[i])) answer.push(s[i]);
  }
  return answer;
}
*/
