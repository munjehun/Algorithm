/*-문제 설명
정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
*/

function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}

solution([1, 2, 3, 4]); //2.5
solution([5, 5]); //5

/*
💯 배열.reduce() : 배열의 각 요소에 대해 주어진 리듀서(reducer) 함수를 실행하고, 하나의 결과값을 반환합니다.

arr.reduce((accumulator, currentValue, currentIndex, array) => {
  return accumulator + currentValue;
},initialValue);

accumulator
reducer는 콜백의 반환값을 누적합니다. 콜백의 이전 반환값 또는, 콜백의 첫 번째 호출이면서 initialValue를 제공한 경우에는 initialValue의 값입니다.

currentValue
처리할 현재 요소.

currentIndex (옵션)
처리할 현재 요소의 인덱스. initialValue를 제공한 경우 0, 아니면 1부터 시작합니다.

array (옵션)
reduce()를 호출한 배열.

initialValue (옵션)
callback의 최초 호출에서 첫 번째 인수에 제공하는 값. 초기값을 제공하지 않으면 배열의 첫 번째 요소를 사용합니다.
*/
