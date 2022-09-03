/*-문제 설명
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.
*/

function stars(data) {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  let star = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(star);
  }
}

stars("5 3");
stars("2 2");

/*
return 하는 것이 아니라 그냥 콘솔로그 하기!
 그리고 문제 그대로 process.stdin.on 으로 해야 하는데 
 vscode에서 한다고 function으로 고쳐서 만든 걸 전체 복붙해서 계속 안풀렸던 것임!
*/

/*
🤖 다른 사람의 풀이

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" ");
    const a = Number(n[0]), b = Number(n[1]);
    const star = `${'*'.repeat(a)}\n`;

    console.log(star.repeat(b));
});

⚡️ 개행(새 줄)처리를 개행문자(/n)로 처리해주었다.

📢 /n : 줄마다 개행을 하고 싶다면 줄마다 개행 문자인 \n을 추가하면 된다.

    const str = 'Hello, \n' +
        'World, \n' +
        'JavaScript \n' +
        '!!!';

    console.log(str); //  Hello,
                          World,
                          JavaScript
                          !!!   
*/
