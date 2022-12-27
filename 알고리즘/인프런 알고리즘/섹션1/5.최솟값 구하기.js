/* - 문제 설명

7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 7개의 수가 주어진다.

▣ 출력설명
첫 번째 줄에 가장 작은 값을 출력한다.
*/

function solution(arr) {
  return Math.min(...arr);
}

// 💯 Math.min의 인자로는 배열이 아닌 숫자들만 가능하다! 따라서 배열이 들어갈 경우 전개구문을 사용해야 한다.
// 💯 Nath.min.apply(null, arr)을 사용하면 arr이라는 배열 자체를 넣을 수 있다!

/* 다른 풀이
function solution(arr) {
  let min = arr[0]
  for(let i=0; i<arr.length; i++){
    if(arr[i] < min) min = arr[i]
  }
  return min;
}

*/

let arr = [5, 7, 1, 3, 2, 9, 11];
let arr2 = [5, 3, 7, 11, 2, 15, 17];

console.log(solution(arr));
console.log(solution(arr2));
