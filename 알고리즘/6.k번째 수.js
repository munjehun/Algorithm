/*
-문제 설명
배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

1. array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
2. 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
3. 2에서 나온 배열의 3번째 숫자는 5입니다.

배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, 
commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 함수를 작성해주세요.
*/
a = [1, 5, 2, 6, 3, 7, 4];
b = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

function solution(array, commands) {
  var answer = [];

  for (let i = 0; i < commands.length; i++) {
    let a = array
      .slice(commands[i][0] - 1, commands[i][1])
      .sort((a, b) => a - b)[commands[i][2] - 1];
    answer.push(a);
  }
  return answer;
}

solution(a, b);

// sort() 함수는 파라미터가 입력되지 않으면, 문자열로 인식해 유니코드 순서에 따라서 값을 정렬한다.
// 따라서, 유니코드 순서에 따라 [1, 10, 2, 3] 으로 정렬된다.
// sort((a,b)=>a-b) 라고 해 주어야 오름차순으로 정렬된다.

/*
🤖다른 사람의 풀이

function solution(array, commands) {
    var answer = [];

    answer = commands.map(a=>{
        return array.slice(a[0]-1,a[1]).sort((b,c)=>b-c)[a[2]-1];
    })
    return answer;
}

=> map으로 새로운 배열로 변환하는 것도 방법!
*/
