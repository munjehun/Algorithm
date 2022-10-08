/*-문제 설명
게임개발자인 "죠르디"는 크레인 인형뽑기 기계를 모바일 게임으로 만들려고 합니다.

게임 화면은 "1 x 1" 크기의 칸들로 이루어진 "N x N" 크기의 정사각 격자이며 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. 
각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 
모든 인형은 "1 x 1" 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다. 
게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다. 
집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다.
만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다. 
크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다. 
또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다.

게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 
크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

//1.배열에서 인형 바구니로 옮기기
//2.바구니에서 2개 연속이면 사라지게 만들고 사라진 인형의 갯수 구하기
function solution(board, moves) {
  let basket = [];
  let disappear = [];

  //인형 바구니로 옮기기
  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        basket.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
  }

  //바구니에서 2개 연속이면 사라지게 만들고 사라진 인형의 갯수 구하기 (재귀)
  destroyDoll(basket, disappear);
  return disappear.length * 2;
}

//연속한 인형 사라지게 만드는 재귀함수
function destroyDoll(basket, disappear) {
  for (let i = 0; i < basket.length; i++) {
    if (basket[i] == basket[i + 1]) {
      basket.splice(i, 2);
      disappear.push(1);
      destroyDoll(basket, disappear);
    }
  }
}

solution(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);

/*
🤖 다른 사람의 풀이

function solution1(board, moves) {
  var count = 0;
  var stack = [];

  for (var i = 0; i < moves.length; i++) {
    var now = moves[i] - 1;
    for (var j = 0; j < board.length; j++) {
      if (board[j][now] != 0) { 👉 고른 것
        if (stack[stack.length - 1] === board[j][now]) {
          👉 고른 것과 stack의 마지막과 같다면 stack 마지막에서 제거
          stack.pop();
          count += 2;
        } else {
          👉 stack 마지막에 추가
          stack.push(board[j][now]);
        }
        board[j][now] = 0; 👉 고른 것 0 만들기
        break;
      }
    }
  }
  console.log(stack);
  return count;
}

⚡️ 바구니에 다 담은 후에 제거하는 것이 아니라 담으면서 같다면 바로 삭제
*/
