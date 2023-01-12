/* - 문제 설명

오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다. 
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다.
네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다. 
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다
*/

function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) p1++;
    else if (arr1[p1] > arr2[p2]) p2++;
    else if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    }
  }
  return answer;
}

let a = [1, 3, 9, 5, 2];
let b = [3, 2, 5, 7, 8];
console.log(solution(a, b));

//⚡️ sort()는 시간복잡도가 n log n 이지만 이중 for문은 시간복잡도가 n^2이므로 비교적 빠른 sort()를 사용!

/* - 다른 풀이

function solution(arr1, arr2) {
  let answer = [];
  let obj = {};
  let arrSum = arr1.concat(arr2);

  for (let i = 0; i < arrSum.length; i++) {
    obj[arrSum[i]] = obj[arrSum[i]] + 1 || 1; //💯 obj에 할당된 값이 있으면 +1, 없으면 1
  }
  for (let i in obj) {
    if (obj[i] == 2) answer.push(+i);
  }
  return answer;
}
*/
