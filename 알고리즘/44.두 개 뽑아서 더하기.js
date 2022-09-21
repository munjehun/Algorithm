/*문제 설명
정수 배열 numbers가 주어집니다. 
numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 하도록 함수를 완성해주세요.
*/
/*
1.for문 2개 중첩으로 돌려서 2개 인자의 합 구하기
2. 빈 배열 result에 더하기
3. result에 그 수가 없을때만 더하기
4. return result sort((a,b)=> a-b);
*/

function solution(numbers) {
  let result = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        result.push(numbers[i] + numbers[j]);
      }
    }
  }
  return [...new Set(result)].sort((a, b) => a - b);
}

solution([2, 1, 3, 4, 1]);
solution([5, 0, 2, 7]);

// => ...new Set(arr) : arr의 원소를 중복없는 객체로 만들기
// => [...new Set(arr)] : arr의 원소를 중복없는 배열로 만들기

/*
🤖 다른 사람의 풀이

function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}

⚡️ for문에서 j를 i+1로 시작. j보다 앞의 i인덱스는 이미 더했으니 더이상 구할 필요가 없다!
*/
