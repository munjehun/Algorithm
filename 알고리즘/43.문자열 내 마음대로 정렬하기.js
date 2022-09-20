/*-문제 설명
문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
예를 들어 strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬합니다.
*/

function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] < b[n]) return -1;
    if (a[n] > b[n]) return 1;
    if (a[n] === b[n]) return a < b ? -1 : 1;
    return 0;
  });
}

solution(["sun", "bed", "car"], 1);
solution(["abce", "abcd", "cdx"], 2);

/*
=> 문자열도 string[index] 처럼 index를 사용할 수 있다! (iterable 하기 때문에)

⚡️ 리턴하는 값이 0보다 작을 경우,  a가 b보다 앞에 오도록 정렬,
   리턴하는 값이 0보다 클 경우, b가 a보다 앞에 오도록 정렬.
   0을 리턴하면, a와 b의 순서를 변경하지 않습니다.
*/

/*
🤖 다른 사람의 풀이

function solution(strings, n) {
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}

📢 localeCompare() : 문자열과 문자열을 비교하고, 정렬순서에 따른 비교를 할 수 있다.

ex) 'a'.localeCompare('b'); // -1
    'b'.localeCompare('a'); // 1
    'b'.localeCompare('b'); // 0
*/
