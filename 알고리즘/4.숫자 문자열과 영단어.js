/*-문제 설명
네오와 프로도가 숫자놀이를 하고 있습니다.
네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.
다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"

이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
s가 의미하는 원래 📍숫자를 return (string => number)📍 하도록 solution 함수를 완성해주세요.
*/
const a = "1zerotwozero3";
const b = "one4seveneight";

function solution(s) {
  return Number(
    s
      .replace(/zero/g, "0")
      .replace(/one/g, "1")
      .replace(/two/g, "2")
      .replace(/three/g, "3")
      .replace(/four/g, "4")
      .replace(/five/g, "5")
      .replace(/six/g, "6")
      .replace(/seven/g, "7")
      .replace(/eight/g, "8")
      .replace(/nine/g, "9")
  );
}

console.log(solution(a)); //10203
console.log(solution(b)); //1478

// => 정규표현식 배웠으니 바로 써먹기! s를 Number 안 씌워줘서 자꾸 통과가 안됐다!

/* 
🤖다른 사람의 풀이

function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}
*/
