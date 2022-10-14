/*-문제 설명
0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.

x의 모든 0을 제거합니다.
x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.

0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때, 
이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.
*/

function solution(s, binary = 0, allZero = 0, answer = []) {
  s.includes("0") ? (allZero += s.match(/0/g).length) : (allZero += 0);

  let 영제거후길이 = s.replace(/0/g, (i) => "").length;

  let 이진변환 = 영제거후길이.toString(2);
  binary += 1;

  이진변환 == 1
    ? answer.push(binary, allZero)
    : solution(이진변환, binary, allZero, answer);

  console.log(answer);
  return answer;
}

solution("110010101001");
solution("01110");

//간단하게 while문을 사용해도 되는데 왜 굳이 어렵게 재귀함수로 풀이했을까..

/*
🤖 다른 사람의 풀이

function solution(s) {
    var answer = [0,0];
    while(s.length > 1) {
        answer[0]++;
        answer[1] += (s.match(/0/g)||[]).length; 👉 0의 갯수 추가
        s = s.replace(/0/g, '').length.toString(2); 👉 0제거후의 길이를 이진수화
    }
    return answer;
}

⚡️ 재귀가 아니라 while문을 이용한 퓰이
⚡️ 답의 형식에 해당하는 배열( answer = [0,0] )을 만들고 해당 인덱스에 카운트업
*/
