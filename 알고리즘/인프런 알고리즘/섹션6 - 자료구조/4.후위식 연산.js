/* - 문제 설명

후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다.
식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

▣ 출력설명
연산한 결과를 출력합니다.
*/

function solution(s) {
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) {
      //💯 숫자인지 판별할 땐 isNaN(n) 사용
      stack.push(x);
    } else {
      let lt = stack[stack.length - 2];
      let rt = stack[stack.length - 1];
      stack.pop();
      stack.pop();
      stack.push(eval(lt + x + rt));
    }
  }
  return Number(stack);
}

let str = "352+*9-";
console.log(solution(str)); //12

/* - 다른 풀이

~
    } else {
      let lt = stack.pop(); //💯 arr.pop()은 배열에서 마지막 요소를 삭제하고 삭제한 값을 반환하므로
      let rt = stack.pop();
      stack.push(eval(lt + x + rt));
~
*/
