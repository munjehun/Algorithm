/* - 문제 설명

한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 대문자의 개수를 출력한다.
*/

function solution(s) {
  return s.match(/[A-Z]/g).length;
}

let str = "KoreaTimeGood";
console.log(solution(str));

/* - 다른 풀이 1

function solution(s) {
  let answer = 0;
  for (let i of s) {
    if (i === i.toUpperCase()) answer++;
  }
  return answer;
}

- 다른 풀이 2

function solution(s) {
  let answer = 0;
  for (let i of s) {
    let num = i.charCodeAt();
    if (65 <= num && num <= 90) answer++; 
    💯 아스키코드는 65(A) ~ 90(Z)이 대문자이고, 97(a)~122(z)가 소문자이다! 32를 더하거나 빼주면 대소문자 전환이 가능하다.
  }
  return answer;
}

*/
