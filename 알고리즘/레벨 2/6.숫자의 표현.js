/*-문제 설명
Finn은 요즘 수학공부에 빠져 있습니다. 
수학 공부를 하던 Finn은 자연수 n을 연속한 자연수들로 표현 하는 방법이 여러개라는 사실을 알게 되었습니다. 
예를들어 15는 다음과 같이 4가지로 표현 할 수 있습니다.

1 + 2 + 3 + 4 + 5 = 15
4 + 5 + 6 = 15
7 + 8 = 15
15 = 15

자연수 n이 매개변수로 주어질 때, 연속된 자연수들로 n을 표현하는 방법의 수를 return하는 solution를 완성해주세요.
*/

//while문?
//순서대로 더하다가 넘어가면 다음 시작 수로 시작
//s와 같아지면 count +
function solution(s) {
  let count = 0;

  for (let j = 1; j <= s; j++) {
    let start = 0;
    for (let i = j; i <= s; i++) {
      start += i;
      // if (start == s) {
      //   count++;
      //   break;
      // }else if(start>s){
      //   break;
      // } 👇중복되는 부분은 하나로 만들기!
      if (start >= s) {
        if (start == s) count++;
        break;
      }
    }
  }
  return count;
}

solution(15);

// => 같은 식이라도 효율성 통과 될 때가 있고, 안될때가 있다..
