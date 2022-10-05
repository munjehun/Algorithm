/*문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 
다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다. 
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다. 
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다. 
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때, 
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항

◾️ 전체 학생의 수는 2명 이상 30명 이하입니다.
◾️ 체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
◾️ 여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
◾️ 여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
◾️ 여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 
  이때 이 학생은 체육복을 하나만 도난당했다고 가정하며, 남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/

//학생들 수 만큼 번호 지정해서 배열 만들기 Array = students
//students에서 없는 사람의 번호 인덱스를 0로 만들기.
//for문으로 돌면서 여벌 있는 사람 번호의 인덱스는 2로 만들기
//for문으로 뒤에서 앞으로 돌면서 없는 사람의 뒤에서 빌려주면 빌려준 사람 0으로 만들기,
//여벌 있는 사람도 도난당할 수 있음
function solution(n, lost, reserve) {
  let students = Array(n + 1).fill(1);
  lost = lost.sort((a, b) => a - b);
  console.log("lost:", lost);
  reserve = reserve.sort((a, b) => a - b);
  console.log("reserve:", reserve);

  for (let i = 0; i < lost.length; i++) {
    //도난당한 사람
    students[lost[i]] -= 1;
  }
  for (let i = 0; i < reserve.length; i++) {
    //여벌있는 사람
    students[reserve[i]] += 1;
  }
  console.log("도난여벌 실태:", students);

  // 뒤로 빌려주기
  for (let i = 0; i < students.length; i++) {
    if (
      !students[i] &&
      students[i - 1] == 2 &&
      (students[i + 3] == 1 || students[i + 3] == null)
    ) {
      //students[i]가 0이고 students[i - 1]가 2면
      students[i - 1] -= 1;
      students[i] += 1;
    }
  }
  console.log("뒤로 빌려주기", students);

  //앞으로 빌려주기
  for (let i = students.length; i > 0; i--) {
    if (!students[i] && students[i + 1] == 2) {
      //students[i]가 0이고 students[i + 1]가 2면
      students[i + 1] -= 1;
      students[i] += 1;
    }
  }
  console.log("앞으로 빌려주기", students);

  students.shift();
  console.log("최종 체육복 실태", students);
  console.log(students.filter((i) => i !== 0).length);
  return students.filter((i) => i !== 0).length;
}

solution(3, [1, 3], [2]);
// solution(5, [2, 4], [3]);
// solution(3, [3], [1]);
