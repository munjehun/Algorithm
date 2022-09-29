//💢 특정 수의 소수 판별
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    //num의 제곱근보다 작은 수에서 나눠지는 수가 안나온다면 num의 제곱근보다 큰 수에서도 나눠지는 수가 나올 수 없다.
    //그래서 이때의 시간복잡도는 O(√ N) 로 가장 빠르다.

    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
  //num = 2이면 for문을 돌지 않아 true, 2미만이면 false.
}
console.log(isPrime(462164)); //false
console.log(isPrime(541)); //true

//연습
function isPrime1(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 2;
}
console.log(isPrime1(462164)); //false
console.log(isPrime1(541)); //true

//〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️〰️

//💢 에라토스테네스의 체 - 특정 수까지 한 번에 소수 판별
function solution(n) {
  let arr = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);

  //num의 제곱근보다 작은 수에서 나눠지는 수가 안나온다면 num의 제곱근보다 큰 수에서도 나눠지는 수가 나올 수 없다.
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i]) {
      for (let j = i * i; j <= n; j += i) {
        //i+i?  i*i? =>둘 다 결과는 같지만 제곱이 더 빠르다.
        //i는 건너뛰고 그 제곱인 j부터 i의 모든 배수를 false 시킴.
        arr[j] = false;
      }
    }
  }
  arr = arr
    .map((i, index) => {
      return i == true ? index : null;
    })
    .filter((i) => i > 1);
  console.log(arr);
  return arr;
}
solution(10); //[ 2, 3, 5, 7 ]

//연습
function eratos(num) {
  let arr = Array(num + 1)
    .fill(true)
    .fill(false, 0, 2);

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (arr[i]) {
      for (j = i * i; j <= num; j += i) {
        arr[j] = false;
      }
    }
  }
  arr = arr
    .map((i, index) => {
      return i == true ? index : null;
    })
    .filter((i) => i > 1);
  console.log(arr);
  return arr;
}
eratos(10); //[ 2, 3, 5, 7 ]
