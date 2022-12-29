/* - 문제 설명

한 개의 문자열을 입력받고, 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
문자열의 길이는 100을 넘지 않습니다.

▣ 입력설명
첫 줄에 문자열이 주어지고, 두 번째 줄에 문자가 주어진다. 

▣ 출력설명
첫 줄에 해당 문자의 개수를 출력한다.
*/

function solution(s, t) {
  return s.split("").filter((i) => i === t).length;
}

let str = "COMPUTERPROGRAMMING";
console.log(solution(str, "R"));

/* - 다른 풀이 1

function solution(s, t) {
  let answer = 0;
  for(let i of s){
    if(i===t) answer += 1;
  }
  return answer;
}

 - 다른 풀이 2

 function solution(s, t) {
  return s.split(t).length - 1;
}

*/
