/*-문제 설명
2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 
요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT 입니다. 

예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.
*/

function solution(a, b) {
  let date = new Date(2016 + "-" + a + "-" + b);
  let week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = week[date.getDay()];
  console.log(day);
  return day;
}

solution(1, 3);
solution(11, 1);
solution(2, 12);
solution(2, 29);
