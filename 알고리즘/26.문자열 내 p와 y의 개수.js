/*-문제 설명
대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 함수를 완성하세요. 
'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.

예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.
*/

function solution(s) {
  s = s.toLowerCase();
  p = s.split("p").length - 1;
  y = s.split("y").length - 1;
  return p == y ? true : false;
}

solution("pPoooyY"); //true
solution("Pyy"); //false
solution("aaa"); //true

//=>정규표현식과 match() 메서드를 이용하면 p와 y가 없는 경우 0이 아닌 null을 리턴하기 때문에 안됨!
// split으로 특정 문자열로 배열을 나눈 다음에 그 길이에서 -1하면 특정 문자열의 갯수를 반환하도록 응용

/*
🤖 다른 사람의 풀이 1️⃣

function numPY(s){
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
}

⚡️ 어차피 둘 다 -1을 해준다면 같은 숫자비교에서 의미가 없기 때문에 -1 생략!
    true 혹은 false이기 때문에 삼항연산자도 생략!

🤖 다른 사람의 풀이 2️⃣

function solution(s){
  return (s.match(/p/ig)||[]).length==(s.match(/y/ig)||[]).length;
}

⚡️ 내가 풀이하지 못한 부분(p,y가 없을때 null리턴)을 ||연산자로 빈배열 리턴하도록 해서 풀이!
    정규식 플래그 : i = 대소문자 구분 안 함.
*/
