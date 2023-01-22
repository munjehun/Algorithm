/* - 문제 설명

N개이 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
정렬하는 방법은 선택정렬입니다.

▣ 입력설명
첫 번째 줄에 자연수 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다. 

▣ 출력설명
오름차순으로 정렬된 수열을 출력합니다
*/

// 💯💯💯 선택 정렬 : for문을 돌면서 최솟값을 만나면 본인의 위치와 교체하며 for문을 끝까지 돈다.

function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = (tmp = arr[i]);
    let idx = 0;
    for (let j = i + 1; j < arr.length; j++) {
      min = Math.min(min, arr[j]);
      idx = arr.indexOf(min);
    }
    arr[i] = min;
    arr[idx] = tmp;
  }

  return arr;
}

let arr = [13, 5, 11, 7, 23, 15];
console.log(solution(arr)); //5 7 11 13 15 23

/* -다른 풀이

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[idx]) idx = j;
    }
    [arr[i], arr[idx]] = [arr[idx], arr[i]]; // 💯 배열간 위치 변경
  }
  return arr;
}
*/
