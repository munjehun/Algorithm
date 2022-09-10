/*-문제 설명
문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.

예를들어 str이 "1234"이면 1234를 반환하고, "-1234"이면 -1234를 반환하면 됩니다.
str은 부호(+,-)와 숫자로만 구성되어 있고, 잘못된 값이 입력되는 경우는 없습니다.
*/

function solution(s) {
  return parseInt(s);
}

solution(1234);
solution(-1234);

/*
🤖 다른 사람의 풀이

function strToInt(str){
  return  +str;
}
*/
