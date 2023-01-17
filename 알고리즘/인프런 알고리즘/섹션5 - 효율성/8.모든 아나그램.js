/* - 문제 설명

S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요. 
아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다. 
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.
*/

function compareMaps(mapA, mapB) {
  if (mapA.size !== mapB.size) {
    return false;
  }
  for (let [key, value] of mapA) {
    if (!mapB.has(key) || mapB.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function solution(map1, map2) {
  let mapA = new Map();
  let mapB = new Map();
  let lt = 0;
  let n = map2.length;
  let answer = 0;
  for (let rt = 0; rt < map1.length; rt++) {
    if (rt < n) mapB.set(map2[rt], mapB.get(map2[rt]) + 1 || 1);
    mapA.set(map1[rt], mapA.get(map1[rt]) + 1 || 1);

    if (rt >= n) {
      mapA.get(map1[lt]) == 1
        ? mapA.delete(map1[lt])
        : mapA.set(map1[lt], mapA.get(map1[lt]) - 1);
      lt++;
    }
    if (rt >= n - 1) {
      if (compareMaps(mapA, mapB)) answer++;
    }
  }

  return answer;
}

let a = "bacaAacba";
let b = "abc";
console.log(solution(a, b));

/* - 다른 풀이

function compareMaps(mapA, mapB) {
  if (mapA.size !== mapB.size) {
    return false;
  }
  for (let [key, value] of mapA) {
    if (!mapB.has(key) || mapB.get(key) !== value) {
      return false;
    }
  }
  return true;
}

function solution(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();
  let len = t.length - 1;

  for (let x of t) {
    tH.set(x, tH.get(x) + 1 || 1);
  }
  for (let i = 0; i < len; i++) {
    sH.set(s[i], sH.get(s[i]) + 1 || 1);
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    sH.set(s[rt], sH.get(s[rt]) + 1 || 1);

    if (compareMaps(sH, tH)) answer++;

    sH.get(s[lt++]) == 1 ? sH.delete(s[lt]) : sH.set(s[lt], sH.get(s[lt] - 1));
  }
  return answer;
}
*/
