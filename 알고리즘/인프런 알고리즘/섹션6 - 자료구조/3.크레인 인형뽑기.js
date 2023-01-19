/* - 문제 설명

프로그래머스 레벨1의 크레인 인형뽑기 게임과 같은 문제

크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다. 
또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다. 

게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 
크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(board, moves) {
  let stack = [];
  let answer = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        let tmp = board[j][moves[i] - 1];
        board[j][moves[i] - 1] = 0;

        if (tmp == stack[stack.length - 1]) {
          stack.pop();
          answer += 2;
        } else stack.push(tmp);
        break; // 💯 다음 for문으로 넘어갈 때는 continue, 해당 for문을 끝낼 때는 break
      }
    }
  }
  console.log(stack);

  return answer;
}

let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];

let b = [1, 5, 3, 5, 1, 2, 1, 4]; //4,3,1,1,3,2,4
console.log(solution(a, b)); //4

/* - 다른 풀이

첫번째 for문을 foreach로 풀이해도 된다!

ex) moves.forEach( pos => {
  for(let i=0; i<board.length; i++){
    if(board[i][pos-1] !== 0) ~~
  }
})
*/
