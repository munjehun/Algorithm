// -문제
// 'Hello HoF!'를 리턴하는 함수를 리턴해야 합니다.

// -나의 풀이
function returnFunction() {
  return function () {
    return "Hello HoF!";
  };
}

output = returnFunction();
console.log(output()); //Hello HoF!
