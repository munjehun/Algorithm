/*-문제 설명
명함 지갑을 만드는 회사에서 지갑의 크기를 정하려고 합니다. 
다양한 모양과 크기의 명함들을 모두 수납할 수 있으면서, 작아서 들고 다니기 편한 지갑을 만들어야 합니다. 
이러한 요건을 만족하는 지갑을 만들기 위해 디자인팀은 모든 명함의 가로 길이와 세로 길이를 조사했습니다.

아래 표는 4가지 명함의 가로 길이와 세로 길이를 나타냅니다.
명함번호	가로길이	세로길이
    1	      60	      50
    2	      30	      70
    3	      60	      30
    4	      80	      40
가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 
하지만 2번 명함을 가로로 눕혀 수납한다면 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
이때의 지갑 크기는 4000(=80 x 50)입니다.

모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 함수를 완성해주세요.
*/

function solution(sizes) {
  sizes = sizes.map((i) => i.sort((a, b) => a - b));

  let maxSize = [];
  for (let j = 0; j < 2; j++) {
    maxSize.push(
      sizes.reduce((a, b) => {
        return a < b[j] ? b[j] : a;
      }, 0)
    );
  }

  return Math.max(...maxSize) * Math.min(...maxSize);
}

solution([
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
]);

// 배열에 Math.max , Math.min을 쓸때는 전개구문을 사용하자!
// 숫자에 sort() 쓸 때는 무조건 (a,b) => a-b 넣기!!

/*
🤖 다른 사람의 풀이

function solution(sizes) {
  let x = Math.max(...sizes.map((i) => Math.max(...i)));
  let y = Math.max(...sizes.map((i) => Math.min(...i)));
  return x * y;
}

⚡️ 내 풀이와 같은 로직으로, 긴 길이의 최대와 짧은 길이의 최대를 곱한다.
*/
