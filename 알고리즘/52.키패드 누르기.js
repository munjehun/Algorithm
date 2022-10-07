/*-문제 설명
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.

이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.

순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때, 
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.
*/

//현재 손가락 위치 누를때마다 저장해야 함.
//현재 손가락에서 가까운 손가락으로 누르기. => 누를 번호와 현재 누른 번호의 차이로 거리 구하기
function solution(numbers, hand) {
  numbers = numbers.map((i) => {
    if (i == 0) {
      return (i = 11);
    } else return i;
  });
  let lFinger = 10;
  let rFinger = 12;
  let result = [];

  numbers.forEach((number) => {
    if (number == 1 || number == 4 || number == 7) {
      result.push("L");
      lFinger = number;
    } else if (number == 3 || number == 6 || number == 9) {
      result.push("R");
      rFinger = number;
    } else if (number == 2 || number == 5 || number == 8 || number == 11) {
      if (
        Math.floor(Math.abs(number - lFinger) / 3) +
          (Math.abs(number - lFinger) % 3) < //왼 손가락과 더 가까우면
        Math.floor(Math.abs(number - rFinger) / 3) +
          (Math.abs(number - rFinger) % 3)
      ) {
        result.push("L");
        lFinger = number;
      } else if (
        Math.floor(Math.abs(number - lFinger) / 3) +
          (Math.abs(number - lFinger) % 3) > //오른 손가락과 더 가까우면
        Math.floor(Math.abs(number - rFinger) / 3) +
          (Math.abs(number - rFinger) % 3)
      ) {
        result.push("R");
        rFinger = number;
      } else {
        //양 손가락 거리가 같으면
        if (hand == "left") {
          result.push("L");
          lFinger = number;
        } else if (hand == "right") {
          result.push("R");
          rFinger = number;
        }
      }
    }
  });
  return result.join("");
}

solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left");

//📌 Math.floor(Math.abs(number - 손가락 위치) / 3) + (Math.abs(number - 손가락 위치) % 3) 로 번호와 손가락 거리 구하기가 포인트!
//📌 거리구하기 편하도록 0을 11로, *을 10으로, #을 12로 설정.
