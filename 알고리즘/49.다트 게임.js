/*-문제 설명

다트 게임은 다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임으로, 모두가 간단히 즐길 수 있다.
다트 게임의 점수 계산 로직은 아래와 같다.

1.다트 게임은 총 3번의 기회로 구성된다.
2.각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
3.점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수1 , 점수2 , 점수3 )으로 계산된다.
4.옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
5.스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다. (예제 4번 참고)
6.스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. (예제 4번 참고)
7.스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. (예제 5번 참고)
8.Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
9.스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.

0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.

예제	dartResult	answer	설명
  1	  1S2D*3T	      37	  1^1 * 2 + 2^2 * 2 + 3^3
  2	  1D2S#10S	    9	    1^2 + 2^1 * (-1) + 10^1
  3	  1D2S0T	      3	    1^2 + 2^1 + 0^3
  4	  1S*2T*3S	    23	  1^1 * 2 * 2 + 2^3 * 2 + 3^1
*/

function solution(dartResult) {
  dartResult = dartResult
    .replace(/\*/g, "@ ")
    .replace(/S/g, "**1 ")
    .replace(/D/g, "**2 ")
    .replace(/T/g, "**3 ")
    .replace(/#/g, "# ")
    .split(" "); //[ '1**1', '2**2', '@', '3**3', '' ]

  for (let i = 0; i < dartResult.length; i++) {
    if (dartResult[i] == "@") {
      if (i == 1) {
        dartResult[i - 1] = 2 * eval(dartResult[i - 1]);
      } else if (dartResult[i - 2] == "@" || dartResult[i - 2] == "#") {
        (dartResult[i - 3] = 2 * eval(dartResult[i - 3])),
          (dartResult[i - 1] = 2 * eval(dartResult[i - 1]));
      } else {
        (dartResult[i - 2] = 2 * eval(dartResult[i - 2])),
          (dartResult[i - 1] = 2 * eval(dartResult[i - 1]));
      }
    }

    if (dartResult[i] == "#") dartResult[i - 1] = -eval(dartResult[i - 1]);
  } //[ 2, 8, '@', '3**3', '' ]

  let except = ["@", "#"];
  dartResult = dartResult
    .filter((i) => !except.includes(i))
    .slice(0, 3)
    .reduce((a, b) => eval(a) + eval(b));

  return dartResult;
}

solution("1S2D*3T");

// 📢 eval() : 문자로 표현 된 JavaScript 코드를 실행하는 함수
// ex) eval('4 * 4') : 16
// ex) eval('2 ** 3') : 8

/*
🤖 다른 사람의 풀이

function solution(dartResult) {
    const bonus = { 'S': 1, 'D': 2, 'T': 3 },
          options = { '*': 2, '#': -1, undefined: 1 };

    let darts = dartResult.match(/\d.?\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(^\d{1,})(S|D|T)(\*|#)?/),
            score = Math.pow(split[1], bonus[split[2]]) * options[split[3]];

        if (split[3] === '*' && darts[i - 1]) darts[i - 1] *= options['*'];

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}

⚡️ 정규식으로 다트 한번씩을 숫자로 변환해서 풀이! ex) [ '1S', '2D*', '3T' ]
⚡️ 문자열.match(정규식) : "문자열"에서 "정규표현식"에 매칭되는 항목들을 배열로 반환
(darts[1].match(/(^\d{1,})(S|D|T)(\*|#)?/) : [ '1S', '1', 'S', undefined, index: 0, input: '1S', groups: undefined ]
*/

let str = "asd1234asd";
console.log(str.match(/\d/)); //[ '1', index: 3, input: 'asd1234asd', groups: undefined ]
console.log(str.match(/\d/g)); //[ '1', '2', '3', '4' ]
