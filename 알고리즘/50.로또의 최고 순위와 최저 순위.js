/*-문제 설명
로또를 구매한 민우는 당첨 번호 발표일을 학수고대하고 있었습니다. 
하지만, 민우의 동생이 로또에 낙서를 하여, 일부 번호를 알아볼 수 없게 되었습니다. 
당첨 번호 발표 후, 민우는 자신이 구매했던 로또로 당첨이 가능했던 최고 순위와 최저 순위를 알아보고 싶어 졌습니다.
알아볼 수 없는 번호를 0으로 표기하기로 하고, 민우가 구매한 로또 번호 6개가 44, 1, 0, 0, 31 25라고 가정해보겠습니다. 
당첨 번호 6개가 31, 10, 45, 1, 6, 19라면, 당첨 가능한 최고 순위와 최저 순위의 한 예는 아래와 같습니다.

당첨 번호	31	10	45	1	6	19	결과
최고 순위 번호	31	0→10	44	1	0→6	25	4개 번호 일치, 3등
최저 순위 번호	31	0→11	44	1	0→7	25	2개 번호 일치, 5등

◾️ 순서와 상관없이, 구매한 로또에 당첨 번호와 일치하는 번호가 있으면 맞힌 걸로 인정됩니다.
◾️ 알아볼 수 없는 두 개의 번호를 각각 10, 6이라고 가정하면 3등에 당첨될 수 있습니다.
  ▫️ 3등을 만드는 다른 방법들도 존재합니다. 하지만, 2등 이상으로 만드는 것은 불가능합니다.
◾️ 알아볼 수 없는 두 개의 번호를 각각 11, 7이라고 가정하면 5등에 당첨될 수 있습니다.
  ▫️ 5등을 만드는 다른 방법들도 존재합니다. 하지만, 6등(낙첨)으로 만드는 것은 불가능합니다.

민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 
이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
*/

// 최저 순위 : 찍은 번호 자체로만 로또와 맞는 수 구하기.
// 최고 순위 : 최저 순위에서 0의 수 만큼 추가

function solution(lottos, win_nums) {
  //당첨 숫자 최저 갯수
  let min = lottos.filter((i) => win_nums.includes(i)).length;
  //당첨 숫자 최대 갯수
  let max = min + lottos.filter((v) => !v).length; //0의 갯수만 더하기

  //갯수에 따라 순위 정하기
  var answer = [];
  switch (min) {
    case 2:
      answer.push(5);
      break;
    case 3:
      answer.push(4);
      break;
    case 4:
      answer.push(3);
      break;
    case 5:
      answer.push(2);
      break;
    case 6:
      answer.push(1);
      break;
    default:
      answer.push(6);
  }
  switch (max) {
    case 2:
      answer.push(5);
      break;
    case 3:
      answer.push(4);
      break;
    case 4:
      answer.push(3);
      break;
    case 5:
      answer.push(2);
      break;
    case 6:
      answer.push(1);
      break;
    default:
      answer.push(6);
  }
  return answer.sort((a, b) => a - b);
}

solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]); //[3, 5]

// 왜 case 0: 은 안되는 걸까??

/*
🤖 다른 사람의 풀이 1️⃣

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];

    let minCount = lottos.filter(v => win_nums.includes(v)).length;
    let zeroCount = lottos.filter(v => !v).length; 👉 0만 나오게 (v == false) => (v == 0)

    const maxCount = minCount + zeroCount;

    return [rank[maxCount], rank[minCount]];
}

⚡️ 맞춘 갯수를 배열의 순위로 인덱스를 미리 만들어놓고 순위 적용; 씽크빅 좀 하신듯

🤖 다른 사람의 풀이 2️⃣

function solution(lottos, win_nums) {
  let zero = 0;
  let min = 7;

  lottos.forEach((a) => {
    if (win_nums.includes(a)) min--; ❗️ 당첨 숫자 증가할 수록 최소 순위 증가
    else if (a === 0) zero++; ❗️ 0의 카운트 증가
  });
  if (min === 7) min = 6;

  let max = min - zero;
  if (max === 0) max = 1;

  return [max, min];
}

⚡️ 첫 로또에서 확정된 당첨 숫자가 증가할수록 최저 등수는 높아짐을 이용한 풀이.
*/
