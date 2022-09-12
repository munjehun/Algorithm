/*-문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
*/

function solution(s) {
  return s.length === 4 || s.length === 6
    ? Number.isInteger(+s.replace(/\D/g, "문자"))
    : false;
}

solution("a234"); //false
solution("1234"); //true
solution("1123asd4"); //false

// console.log(Number.isInteger(parseInt(10e1))); //true
//=> 인자로 10e1가 들어오는 경우 숫자화 시키면 숫자가 된다! 따라서 e를 다른 문자로 바꿔주고 풀이

/*
🤖 다른 사람의 풀이

function alpha_string46(s){
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

📢 (정규표현식).test("문자열") : "문자열"이 "정규표현식"과 매칭되면 true, 아니면 false반환
*/
