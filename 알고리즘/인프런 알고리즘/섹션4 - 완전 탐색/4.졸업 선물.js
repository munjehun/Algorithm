/* - 문제 설명

선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 합니다. 
학생들에게 인터넷 쇼핑몰에서 각자 원하는 상품을 골라 그 상품의 가격과 배송비를 제출하라고 했습니다. 
선생님이 가지고 있는 예산은 한정되어 있습니다. 
현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램을 작성하세요.
선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있습니다. 
배송비는 할인에 포함되지 않습니다.

▣ 입력설명
첫 번째 줄에 반 학생수 N(1<=N<=1000)과 예산 M(1<=M<=100,000,000)이 주어진다.
두 번째 줄부터 N줄에 걸쳐 각 학생들이 받고 싶은 상품의 가격과 배송비가 입력됩니다.
상품가격과 배송비는 각각 100,000을 넘지 않습니다. 상품가격은 짝수로만 입력됩니다.

▣ 출력설명
첫 번째 줄에 선생님이 현재 예산으로 선물할 수 있는 최대 학생수를 출력합니다.
선생님 최소한 1개 이상의 상품을 살 수 있는 예산을 가지고 있습니다
*/

// 💯 for문을 돌면서 하나씩 가격을 반값으로 한 다음에 sort해서 예산 전까지 카운트 하며 더해본다.
// 💯 말 그대로 모든 경우를 봐야 하는 완전탐색!!

// function solution(m, product) {
//   let count = 0;
//   let sumResult = [];

//   for (let i = 0; i < product.length; i++) {
//     product[i][0] /= 2; //for문 한 번 돌 때마다 i번째 가격을 반값으로 처리
//     let sum = 0;
//     let priceSum = [...product].map((price) => price[0] + price[1]);

//     priceSum.sort((a, b) => a - b);

//     for (let j = 0; j < priceSum.length; j++) {
//       sum += priceSum[j];
//       count++;
//       if (sum > m) {
//         sumResult.push(j);
//         break;
//       }
//     }
//     product[i][0] *= 2; //for문 끝날때는 i번째 가격을 다시 원가격으로 복구
//   }
//   return Math.max(...sumResult);
// }

// ❌ console.log(solution(41, [[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]])); 의 경우 5가 돼야 하는데 이 코드에선 4가 나온다.

function solution(m, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1])); //❗️ 가격의 합을 더한 것들을 오름차순으로

  for (let i = 0; i < n; i++) {
    let money = m - (product[i][0] / 2 + product[i][1]);
    let count = 1; //❗️ 한 개는 산다고 했으니 1부터 시작.
    for (let j = 0; j < n; j++) {
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        //❗️ i번째가 반값일 때, 정가 j번째를 빼면서 count ++
        money -= product[j][0] + product[j][1];
        count++;
      }
    }
    answer = Math.max(answer, count); //❗️ count중에서 큰 수를 answer에 계속 적용.
  }
  return answer;
}

let arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];
console.log(solution(28, arr));
