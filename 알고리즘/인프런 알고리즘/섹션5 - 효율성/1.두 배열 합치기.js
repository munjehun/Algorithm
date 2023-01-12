/* - 문제 설명

오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다. 
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다. 
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다.
*/

function solution(arr1, arr2) {
  return arr1.concat(arr2).sort((a, b) => a - b);
}

let a = [1, 3, 5];
let b = [2, 3, 6, 7, 9];
console.log(solution(a, b));

// 효율성을 따져야 하기 때문에 sort()를 쓰면 시간복잡도는 n log n이다.
// 따라서 투 포인터 알고리즘을 사용해서 효율성을 높여야 한다.

/* - 다른 풀이

function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) {
      answer.push(arr1[p1++]);
    } else if (arr1[p1] > arr2[p2]) {
      answer.push(arr2[p2++]);
    }
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);

  return answer;
}

⚡ arr1️과 arr2를 각각 하나의 포인터(p1, p2)로 잡고 두 포인터에 해당하는 숫자 중에서 큰 수를 answer에 push한다.
*/
