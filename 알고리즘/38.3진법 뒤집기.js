/*-문제 설명
자연수 n이 매개변수로 주어집니다. 
n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 함수를 완성해주세요.
*/

function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

solution(45);
solution(125);

console.log(parseInt(1101, 2));

/*
📢 숫자.toString(n) : n진법 수로 변환
📢 parseInt(string, radix) : 문자열을 radix진법의 정수로 반환.
    👉 parseInt(1101, 2) : 1101을 2진법의 수로 반환.
*/

/*
🤖 다른 사람의 풀이

function solution(n) {
    const answer = [];
    while(n !== 0) {
        answer.unshift(n % 3);
        n = Math.floor(n/3);
    }
    return answer.reduce((acc,v,i) => acc + (v * Math.pow(3, i)),0);   
}

⚡️ unshift로 n을 3진법수로 표현, reduce로 풀이 (3진법 풀이 => 21일때 2*3^1 + 1*3^0)

📢 arr.unshift(n) : arr 배열의 맨 앞에 n을 추가
*/
