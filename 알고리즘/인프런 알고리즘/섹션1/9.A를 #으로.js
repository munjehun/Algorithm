/* - 문제 설명

대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 문자열이 입력된다.

▣ 출력설명
첫 번째 줄에 바뀐 단어를 출력한다.
*/

function solution(s) {
  return s.replace(/A/g, "#");
}

let str = "BANANA";
console.log(solution(str));

/* - 다른 풀이 1

function solution(s) {
  return s.split("")
    .map((i) => {
      if (i == "A") {
        return "#";
      } else return i;
    })
    .join("");
}

 - 다른 풀이 2

function solution(s) {
  let answer = '';
  for(let i of s){
    if(i === 'A') answer += '#';
    else answer += i;
  }
    return answer;
}


*/
