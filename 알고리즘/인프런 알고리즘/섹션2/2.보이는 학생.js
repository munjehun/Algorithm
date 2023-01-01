/* - 문제 설명

선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 
일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때, 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그램을 작성하세요. 
(앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

▣ 입력설명
첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.

▣ 출력설명
선생님이 볼 수 있는 최대학생수를 출력한다.
*/

function solution(arr) {
  let answer = [];
  let max = arr[0];
  answer.push(arr[0]);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer.push(arr[i]);
      max = arr[i];
    }
  }
  return answer.length;
}

let arr = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(arr));

/* - 비슷하지만 다른 풀이

💯 갯수를 셀 때는 카운트 업으로!

function solution(arr) {
  let answer = 1;
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      answer++;
      max = arr[i];
    }
  }
  return answer.length;
}
*/
