/*-문제 설명
행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 
2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
*/
let arr1 = [
  [1, 2],
  [2, 3],
];
let arr2 = [
  [3, 4],
  [5, 6],
];

// console.log(arr1[0][0]);
// console.log(arr1[0][1]);
// console.log(arr1[1][1]);
// console.log(arr1[1][0]);

// console.log(arr2[0][0]);
// console.log(arr2[0][1]);
// console.log(arr2[1][1]);
// console.log(arr2[1][0]);

// console.log(
//   [arr1[0][0] + arr2[0][0], arr1[0][1] + arr2[0][1]],
//   [arr1[1][0] + arr2[1][0], arr1[1][1] + arr2[1][1]]
// );
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      answer.push(arr1[i][j] + arr2[i][j]);
    }
  }
  answer.filter((i) => i !== NaN);
  console.log(answer);
}

solution(
  [
    [1, 2],
    [2, 3],
  ],
  [
    [3, 4],
    [5, 6],
  ]
);
solution([[1], [2]], [[3], [4]]);
