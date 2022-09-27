/*-문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 함수를 완성해주세요.
*/

//3개 고르는 조합값을 새 배열에 담기
//새 배열의 합이 소수인지 filter로 돌리기.
//배열의 길이 구하기.

function solution(nums) {
  let combi = getCombi(nums);
  let combiSum = combi.map((i) => i.reduce((a, b) => a + b));
  let prime = combiSum.filter((i) => isPrime(i));

  return prime.length;
}

//소수 판별 함수
function isPrime(num) {
  // num의 제곱근보다 작은 수에서 안 나눠지면 제곱근 보다 큰 수에서도 안 나눠진다.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

//조합 만들기 함수
function getCombi(nums, selectNumber = 3) {
  let result = [];
  if (selectNumber == 1) return nums.map((i) => [i]);

  nums.forEach((fix, index, origin) => {
    let rest = origin.slice(index + 1);
    let combi = getCombi(rest, selectNumber - 1);
    let attach = combi.map((i) => [fix, ...i]);
    result.push(...attach);
  });
  console.log(result);
  return result;
}

solution([1, 2, 3, 4]); //1
solution([1, 2, 6, 4, 7]); //4

/*
🤖 다른 사람의 풀이

function solution(nums) {
  let answer = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (isPrime(sum)) answer += 1;
      }
    }
  }

  return answer;
}

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num >= 2;
}

<<<<<<< HEAD
⚡️ 원소가 3개인 조합 배열을 따로 만들지 않고, for문으로 원소 3개를 구한 후 합해서 소수 판별 
=======
⚡️ 원소가 3개인 조합 배열을 따로 만들지 않고, for문으로 원소 3개를 구한 후 합해서 소수 판별
>>>>>>> d98f75d0a5dd2eab1eeef30d10c5d6e5fcf456d1
*/
