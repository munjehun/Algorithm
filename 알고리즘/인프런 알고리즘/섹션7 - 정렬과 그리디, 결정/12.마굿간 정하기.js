/* - 문제 설명

N개의 마구간이 수직선상에 있습니다. 
각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마구간 간에 좌표가 중복되는 일은 없습니다.
현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다. 
각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다. 
C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대값을 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 자연수 N(3<=N<=200,000)과 C(2<=C<=N)이 공백을 사이에 두고 주어집니다.
둘째 줄에 마구간의 좌표 xi(0<=xi<=1,000,000,000)가 차례로 주어집니다.

▣ 출력설명
첫 줄에 가장 가까운 두 말의 최대 거리를 출력하세요
*/

// mid 거리만큼 띄울 때 말 몇마리가 들어가는지 구하는 함수
function count(stable, mid) {
  let cnt = 1;
  let endPoint = stable[0];
  for (let i = 1; i < stable.length - 1; i++) {
    if (stable[i] - endPoint >= mid) {
      cnt++;
      endPoint = stable[i];
    }
  }
  return cnt;
}

function solution(c, stable) {
  stable.sort((a, b) => a - b);

  let answer;
  let lt = 1; //마굿간 사이 최소 거리를 구해야 하는데, 구하는 식을 실행하는 것보다 1로 해놓는게 더 효율적.
  let rt = stable[stable.length - 1] - stable[0]; //마굿간 사이의 최대 거리

  // 마굿간 사이의 최소 거리와 최대 거리 사이에서 서로 가장 멀리 떨어지는 거리 구하기!
  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);
    if (count(stable, mid) >= c) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }

  return answer;
}

let arr = [1, 2, 8, 4, 9];
console.log(solution(3, arr)); //3
