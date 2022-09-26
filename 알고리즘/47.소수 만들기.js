/*-문제 설명
주어진 숫자 중 3개의 수를 더했을 때 소수가 되는 경우의 개수를 구하려고 합니다. 
숫자들이 들어있는 배열 nums가 매개변수로 주어질 때, 
nums에 있는 숫자들 중 서로 다른 3개를 골라 더했을 때 소수가 되는 경우의 개수를 return 하도록 함수를 완성해주세요.
*/

//3개 고르는 조합값을 새 배열에 담기
//새 배열의 합이 소수인지 filter로 돌리기.
//배열의 길이 구하기.

function solution(nums) {
  let answer = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      for (let k = j + 1; k < length; k++) {
        const sum = nums[i] + nums[j] + nums[k]; //조합의 수 만들기!
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

// =>조합을 다른 방식으로 코딩
