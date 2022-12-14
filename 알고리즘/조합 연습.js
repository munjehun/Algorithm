const getCombinations = function (arr, selectNumber = 3) {
  const results = [];
  //π―π―π―(arr, 1) μ΄λ―λ‘ arrμ μμ 1κ° μμ²΄λ₯Ό λ°°μ΄λ‘ νλ λ°°μ΄ λ¦¬ν΄π―π―π―
  if (selectNumber === 1) return arr.map((el) => [el]);
  //1-6 arr : [[3], [4]]

  arr.forEach((fixed, index, origin) => {
    console.log(fixed, index, origin);
    //1.  (1, 0, [1, 2, 3, 4])
    //1-3 (2, 0, [ 2, 3, 4 ])
    //1-9 (3, 1, [ 2, 3, 4 ])
    //1-14 (4, 2, [ 2, 3, 4 ])

    const rest = origin.slice(index + 1);
    console.log("rest :", rest);
    //1-1 rest :  [ 2, 3, 4 ]
    //1-4 rest : [ 3, 4 ]
    //1-10 rest : [ 4 ]
    //1-15 rest : []

    const combinations = getCombinations(rest, selectNumber - 1);
    console.log("combinations:", combinations);
    //1-2 combinations : getCombinations([ 2, 3, 4 ], 2)
    //π―1-5 combinations : getCombinations([ 3, 4 ], 1) = [[ 3 ], [ 4 ]] π
    //π―1-11 combinations : getCombinations([ 4 ], 1) = [[ 4 ]]
    //1-16 combinations : getCombinations([], 1) = []
    //1-19 λ€μ 1-2λ‘ λμκ°μ getCombinations([ 2, 3, 4 ], 2) = [[2, 3], [2, 4], [3, 4]]

    const attached = combinations.map((el) => [fixed, ...el]);
    console.log("attached :", attached);
    //π―1-7 attached : [[2, 3], [2, 4]]
    //1-12 attached : [[3, 4]]
    //1-17 attached : []
    //1-20 attached : [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ] ]

    results.push(...attached);
    console.log("results :", results);
    //π―1-8 results : [[2, 3], [2, 4]]
    //1-13 results : [[2, 3], [2, 4], [3, 4]]
    //1-18 results : [[2, 3], [2, 4], [3, 4]] π [2, 3, 4] μμν λ
    //1-21 results : [ [ 1, 2, 3 ], [ 1, 2, 4 ], [ 1, 3, 4 ] ] π (1, 0, [1, 2, 3, 4])μ 1μ κ³ μ νκ³  νλ λμν λ.
    console.log("γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘γ‘");
  });
  // console.log("results :", results);
  return results;
};

// getCombinations([1, 2, 3, 4]);

function getCombi(arr, selectNumber = 3) {
  let result = [];
  if (selectNumber == 1) return arr.map((i) => [i]);

  arr.forEach((fix, index, origin) => {
    let rest = origin.slice(index + 1);
    let combi = getCombi(rest, selectNumber - 1);
    let attach = combi.map((i) => [fix, ...i]);
    result.push(...attach);
  });
  console.log(result);
  return result;
}

getCombi([1, 2, 3, 4]);
