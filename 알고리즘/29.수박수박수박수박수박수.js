/*-문제 설명
길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수를 완성하세요. 
예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
*/

function solution(n) {
  let waterMelonWater = "";
  for (let i = 0; i < n; i++) {
    if (i % 2 == 0) {
      waterMelonWater += "수";
    } else {
      waterMelonWater += "박";
    }
  }
  return waterMelonWater;
}

solution(3);
solution(4);

/*
🤖 다른 사람의 풀이

const waterMelon = n => {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}

⚡️ n이 짝수면 나누기 2를 해서 그만큼 수박으로 반복붙이기 + 나머지 1이 남으면 '수' 붙이기
*/
