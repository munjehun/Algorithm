/* - 문제 설명

왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 
일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 
뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

▣ 입력설명
아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 
아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

▣ 출력설명
입력된 순서대로 일곱 난쟁이의 키를 출력한다.

*/

function solution(arr) {
  let sum = arr.reduce((a, b) => a + b);
  let notDwarf = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - 100 === arr[i] + arr[j]) {
        notDwarf.push(arr[i], arr[j]);
      }
    }
  }
  return arr.filter((i) => !notDwarf.includes(i));
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

/* - 다른 풀이

function solution(arr) {
  let sum = arr.reduce((a, b) => a + b);

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - 100 === arr[i] + arr[j]) {
        arr.splice(i,1)
        arr.splice(j-1,1)
      }
    }
  }
  return arr;
}

*/
