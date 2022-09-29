function isPrime(num) {
  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    //num의 제곱근보다 작은 수에서 나눠지는 수가 안나온다면 num의 제곱근보다 큰 수에서도 나눠지는 수가 나올 수 없다.
    //그래서 이때의 시간복잡도는 O(√ N) 로 가장 빠르다.

    //num을 정수로 변환해주는 메소드가 없으면 소수점(decimal number)의 숫자는
    //소수(prime number)가 아님에도 불구하고 리턴값은 true가 나온다???
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
  //num = 2이면 for문을 돌지 않아 true, 2미만이면 false.
}

function isPrime1(num) {
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return num > 2;
}
