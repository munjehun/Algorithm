/*-문제 설명
배열 arr가 주어집니다. 배열 arr의 각 원소는 숫자 0부터 9까지로 이루어져 있습니다. 
이때, 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거하려고 합니다. 
단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야 합니다. 예를 들면,

arr = [1, 1, 3, 3, 0, 1, 1] 이면 [1, 3, 0, 1] 을 return 합니다.
arr = [4, 4, 4, 3, 3] 이면 [4, 3] 을 return 합니다.

배열 arr에서 연속적으로 나타나는 숫자는 제거하고 남은 수들을 return 하는 solution 함수를 완성해 주세요.
*/

/*
1.arr의 원소들을 하나하나 검사해서 다음 원소에 같은 수가 있으면 걸러낸다 >> filter??
2.answer배열에 모두 추가한다 or 배열 변수명을 그냥 재할당한다? 
*/

function solution(arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

//   arr.reduce((acc, cur) => {
//     if (acc !== cur) {
//       return cur;
//     }
//     return answer.push(cur);
//   });
//  😮 이건 왜 안될까? 0이 안들어감.

/* 
🤖다른 사람의 풀이

  function solution(arr) {
      return arr.filter((val,index) => val != arr[index+1]);
  }

  ⚡️ filter에도 index가 있다!
*/
