/*-문제 설명
새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 
이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 
즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 함수를 완성하세요.
단, 금액이 부족하지 않으면 0을 return 하세요.
*/

function solution(price, money, count) {
  let result = 0;
  for (let i = 0; i <= count; i++) {
    result += price * i;
  }
  return result - money < 0 ? 0 : result - money;
}
solution(3, 20, 4); //10

/*
🤖 다른 사람의 풀이

function solution(price, money, count) {
    const tmp = price * count * (count + 1) / 2 - money;
    return tmp > 0 ? tmp : 0;
}

⚡️ 가우스 공식(등차수열의 합)을 이용한 풀이. 
*/
