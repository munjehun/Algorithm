/*문제 설명
어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식을 시저 암호라고 합니다. 
예를 들어 "AB"는 1만큼 밀면 "BC"가 되고, 3만큼 밀면 "DE"가 됩니다. "z"는 1만큼 밀면 "a"가 됩니다. 
문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수, solution을 완성해 보세요.
*/

function solution(s, n) {
  return s
    .split("")
    .map((i) => {
      if (i == " ") {
        return i;
      }
      let tmp = i.charCodeAt(); //아스키 코드화
      return i.toUpperCase().charCodeAt() + n > 90 //String.fromCharCode(90) = Z 이기 때문에
        ? String.fromCharCode(tmp + n - 26) //소문자 z라도 26을 빼면 소문자 a가 된다.
        : String.fromCharCode(tmp + n);
    })
    .join("");
}

solution("AB", 1);
solution("z", 1);
solution("a B z", 4);

// 문자.charCodeAt() : 주어진 인덱스에 대한 아스키코드를 반환
// String.fromCharCode(숫자) : 인자로 넣은 숫자를 아스키코드로 인식해 문자로 반환
// String.fromCharCode(65,66,67);  // "ABC"

/*
🤖 다른 사람의 풀이

function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        if(s[i] == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(s[i]) ? upper : lower; //대소문자 판별
        var index = textArr.indexOf(s[i])+n;
        if(index >= textArr.length) index -= textArr.length; // textArr.length는 아마 26?
          =>if(index >= 26) index = index - 26;  
        answer += textArr[index];
    }
    return answer;
}

⚡️ 아스키코드를 쓰지 않은 풀이. 대소문자 판별이 중요하다!
*/
