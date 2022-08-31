/*-문제 설명
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수
solution을 완성해주세요.
*/
function solution(phone_number) {
  phone_number = (phone_number + "").split("");
  for (let i = 0; i < phone_number.length; i++) {
    if (i < phone_number.length - 4) {
      phone_number[i] = "*";
    }
  }
  console.log(phone_number.join(""));
  return phone_number.join("");
}

solution("01033334444");
solution("027778888");

/*
🤖다른 사람의 풀이 1️⃣

function hide_numbers(s) {
  return s.replace(/\d(?=\d{4})/g, "*");
}

⚡️ 정규식(전방 탐색)으로 한줄로 간단히!

전방 탐색 기호는 ?= 이며, = 다음에 오는 문자가 일치하는 영역에서 제외된다. 
또한, 전방 탐색은 하위 표현식과 같이 소괄호로 감싸주어야만 합니다. 

=> /\d(?=\d{4})/g = ?= 뒤의 숫자 4개(\d{4})를 제외하고 나머지 숫자(\d)들(/g)

🤖다른 사람의 풀이 2️⃣

function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}

📢 repeat() : 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열을 반환.

str.repeat(count);
"*".repeat(4); //****
*/
