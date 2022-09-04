/*-문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
*/

function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

solution([1, 2, 3, 4]); //2.5
solution([5, 5]); //5
