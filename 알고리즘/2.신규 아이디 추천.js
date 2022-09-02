/*-문제 설명
카카오에 신입 개발자 네오는 "카카오계정개발팀"에 배치되어, 카카오 서비스에 가입하는 유저들의 아이디를 생성하는 업무를 담당하게 되었습니다.
네오에게 주어진 첫 업무는 새로 가입하는 유저들이 카카오 아이디 규칙에 맞지 않는 아이디를 입력했을 때, 
입력된 아이디와 유사하면서 규칙에 맞는 아이디를 추천해주는 프로그램을 개발하는 것입니다.

다음은 카카오 아이디의 규칙입니다.

▪️아이디의 길이는 3자 이상 15자 이하여야 합니다.
▪️아이디는 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.) 문자만 사용할 수 있습니다.
▪️단, 마침표(.)는 처음과 끝에 사용할 수 없으며 또한 연속으로 사용할 수 없습니다.

네오는 다음과 같이 7단계의 순차적인 처리 과정을 통해 신규 유저가 입력한 아이디가 카카오 아이디 규칙에 맞는 지 검사하고 규칙에 맞지 않은 경우 규칙에 맞는 새로운 아이디를 추천해 주려고 합니다.

신규 유저가 입력한 아이디가 new_id 라고 한다면,
1단계 new_id의 모든 대문자를 대응되는 소문자로 치환합니다.
2단계 new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
3단계 new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
     만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
*/

let a = "z-+.^.";

function solution(new_id) {
  // 1단계
  let answer = new_id.toLowerCase();
  console.log("1단계:" + answer);

  // 2단계
  answer = answer.replace(/[^\w-_.]/g, "");
  console.log("2단계:" + answer);

  // 3단계
  answer = answer.replace(/[.]{2,}/g, ".");
  console.log("3단계:" + answer);

  // 4단계
  answer = answer.replace(/^\.|\.$/g, "");
  console.log("4단계:" + answer);

  // 5단계
  if (answer.length === 0) answer = "a";
  console.log("5단계:" + answer);

  // 6단계
  if (answer.length >= 16) answer = answer.slice(0, 15).replace(/\.$/g, "");
  console.log("6단계:" + answer);

  //7단계
  if (answer.length <= 2) {
    while (answer.length < 3) {
      answer += answer[answer.length - 1];
    }
  }
  console.log("7단계:" + answer);

  return answer;
}

solution(a);

//=> 정규표현식을 배웠다. 3일동안 정규표현식 연습사이트로 연습해야겠다.

/*
🤖다른 사람의 풀이

function solution(new_id) {
    const answer = new_id
        .toLowerCase() // 1
        .replace(/[^\w-_.]/g, '') // 2
        .replace(/\.+/g, '.') // 3
        .replace(/^\.|\.$/g, '') // 4
        .replace(/^$/, 'a') // 5  📌📌📌
        .slice(0, 15).replace(/\.$/, ''); // 6 📌📌📌
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); 📌삼항연산자로 마무리!
}
*/
