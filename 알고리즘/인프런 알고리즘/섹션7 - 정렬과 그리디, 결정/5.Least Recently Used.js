/* - 문제 설명

LRU 알고리즘은 Least Recently Used 의 약자로 직역하자면 가장 최근에 사용되지 않은 것 정도의 의미를 가지고 있습니다. 
캐시에서 작업을 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하겠다는 알고리즘입니다.

캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면 
N개의 작업을 처리한 후 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는 프로그램을 작성하세요.

▣ 입력예제 1 
5 9
1 2 3 2 6 2 3 5 7

▣ 출력예제 1
7 5 3 2 6
*/

// 없으면 넣고 있으면 삽입 정렬!

// 정답 배열의 길이가 지정 길이가 되지 않으면 맨 앞에 unshift()로 넣기.
// 지정 길이가 됐으면 삽입정렬으로 넣기!

function solution(size, arr) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    let tmp = arr[i];
    // 기존 배열에 있으면 기존원소 삭제
    if (answer.includes(arr[i])) answer.splice(answer.indexOf(arr[i]), 1);

    if (answer.length < size) {
      answer.unshift(arr[i]);
    } else {
      //배열 길이 다 찼을 때
      if (answer.includes(arr[i])) {
        let j;
        for (j = answer.indexOf(arr[i]); j >= 0; j--) {
          if (answer[j] > tmp) answer[j + 1] = answer[j];
          else break;
        }
        answer[j + 1] = tmp;
      } else {
        answer.pop();
        answer.unshift(arr[i]);
      }
    }
  }

  return answer;
}

let arr = [1, 2, 3, 2, 6, 2, 3, 5, 7];
console.log(solution(5, arr)); //7 5 3 2 6

/* - 삽입정렬을 이용한 풀이 1

function solution(size, arr) {
  let answer = Array.from({ length: size }, () => 0);
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      // 기존 배열에 없을 때
      for (let i = size - 1; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      //기존 배열에 있을 때
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  });

  return answer;
}

- 다른 풀이

function solution(size, arr) {
  let answer = [];
  arr.forEach((x) => {
    let pos = -1;
    for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
    if (pos === -1) {
      answer.unshift(x);
      if (answer.length > size) answer.pop();
    } else {
      answer.splice(pos, 1);
      answer.unshift(x);
    }
  });

  return answer;
}
*/
