/*
-문제 설명
어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.

-제한사항
◽️ absolutes의 길이는 1 이상 1,000 이하입니다.
  ▫️ absolutes의 모든 수는 각각 1 이상 1,000 이하입니다.
◽️ signs의 길이는 absolutes의 길이와 같습니다.
  ▫️ signs[i] 가 참이면 absolutes[i] 의 실제 정수가 양수임을, 그렇지 않으면 음수임을 의미합니다.
*/

// 1. map 사용해서 부호가 붙은 새로운 배열 리턴 => 방법이 생각나지 않아서 for문으로 처리!
// 2. reduce로 배열의 값 모두 더하기
const absolutes1 = [4, 7, 12];
const signs1 = [true, false, true];

const absolutes2 = [1, 2, 3];
const signs2 = [false, false, true];

function solution(absolutes, signs) {
  for (let i = 0; i < absolutes.length; i++) {
    if (signs[i] == false) {
      absolutes[i] = -absolutes[i];
    }
  }
  return absolutes.reduce((a, b) => a + b);
}

solution(absolutes1, signs1); //9
solution(absolutes2, signs2); //0

/*
🤖다른 사람의 풀이 1️⃣

function solution(absolutes, signs) {

    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}

⚡️ reduce의 index를 이용해서 내가 쓴 for문을 생략.


🤖다른 사람의 풀이 2️⃣

function solution(absolutes, signs) {
    let answer = 0;
    for (let i = 0; i < absolutes.length; i++) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i]
    }
    return answer;
}

⚡️ for문으로  signs의 값만 따져서 absolutes 배열을 변경하지 않고 answer에 absolutes의 값 더하기 or 빼기!
*/
