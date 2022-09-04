/*-문제
배열과 임의의 값(keeper)을 입력받아 기존 배열에서 keeper와 일치하는 요소만을 갖는 새로운 배열을 리턴해야 합니다.

-주의 사항
  ▪️ 반복문(for, while) 사용은 금지됩니다.
  ▪️ arr.indexOf, arr.splice, arr.slice, arr.forEach 등의 사용은 금지됩니다.
  ▪️ 반드시 arr.filter를 이용해서 풀어야 합니다.
  ▪️ 입력받은 배열을 수정하지 않아야 합니다.
  ▪️ 빈 배열을 입력받은 경우, 빈 배열을 리턴해야 합니다.
  ▪️ keeper와 일치하는 요소가 없는 경우, 빈 배열을 리턴해야 합니다.
*/

// 나의 풀이
function keep(arr, keeper) {
  return arr.filter((i) => i == keeper);
}

// 예시 문제
let output = keep([1, 2, 3, 2, 1], 2);
console.log(output); // --> [2, 2]
