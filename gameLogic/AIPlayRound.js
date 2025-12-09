import whoIsWinning from './whoIsWinnig.js';

export default function aiplayround(bord) {
  let win = false;
  let gameBord = bord;
  let game = true;
  while (game) {
    let row = Math.floor(Math.random() * 10);
    let col = Math.floor(Math.random() * 10);
    if (
      gameBord[row][col] !== '🟫' &&
      gameBord[row][col] !== '🟦' &&
      gameBord[row][col]['belongTo'] === 'AI'
    ) {
      let arr1 = ['r', 'l', 'f', 'b'];
      let rnd = [];
      let keys = arr1.map((a, b) => b);
      while (keys.length) {
        rnd.push(arr1[keys.splice(Math.floor(Math.random() * keys.length), 1)]);
      }
      for (let i = 0; i < arr1.length; i++) {
        let choice = arr1[i];
        if (choice === 'r') {
          if (col + 1 !== 10) {
            if (bord[row][col + 1] === '🟫') {
              [bord[row][col], bord[row][col + 1]] = [
                bord[row][col + 1],
                bord[row][col],
              ];
              game = false;
              break;
            } else if (bord[row][col + 1] === '🟦') {
              continue;
            } else if (bord[row][col + 1]['belongTo'] === 'AI') {
              continue;
            } else if (bord[row][col + 1]['belongTo'] !== 'AI') {
              console.log(`battle!!!
                         player rank: ${bord[row][col + 1]['rank']}
                         AI rank ${bord[row][col]['rank']}`);

              let battle = whoIsWinning(bord[row][col], bord[row][col + 1]);
              if (battle === 'attacker win') {
                console.log(`AI rank ${bord[row][col]['rank']} win`);
                bord[row][col + 1] = bord[row][col];
                bord[row][col] = '🟫';
                game = false;
                break;
              } else if (battle === 'defender win') {
                console.log(`AI rank ${bord[row][col]['rank']} loose`);
                bord[row][col] = '🟫';
                game = false;
                break;
              } else if (battle === 'draw') {
                console.log('Draw, you two are dead.');
                [bord[row][col], bord[row][col + 1]] = ['🟫', '🟫'];
                game = false;
                break;
              } else if (
                battle === `${bord[row][col]['belongTo']} win the game`
              ) {
                win = true;
                game = false;
                break;
              }
            }
          } else {
            continue;
          }
        }
        if (choice === 'l') {
          if (col - 1 !== -1) {
            if (bord[row][col - 1] === '🟫') {
              [bord[row][col], bord[row][col - 1]] = [
                bord[row][col - 1],
                bord[row][col],
              ];
              game = false;
              break;
            } else if (bord[row][col - 1] === '🟦') {
              continue;
            } else if (bord[row][col - 1]['belongTo'] === 'AI') {
              continue;
            } else if (bord[row][col - 1]['belongTo'] !== 'AI') {
              console.log(`battle!!!
                         player rank: ${bord[row][col - 1]['rank']}
                         AI rank ${bord[row][col]['rank']}`);

              let battle = whoIsWinning(bord[row][col], bord[row][col - 1]);
              if (battle === 'attacker win') {
                console.log(`AI rank ${bord[row][col]['rank']} win`);
                bord[row][col - 1] = bord[row][col];
                bord[row][col] = '🟫';
                game = false;
                break;
              } else if (battle === 'defender win') {
                console.log(`AI rank ${bord[row][col]['rank']} loose`);
                bord[row][col] = '🟫';
                game = false;
                break;
              } else if (battle === 'draw') {
                console.log('Draw, you two are dead.');
                [bord[row][col], bord[row][col - 1]] = ['🟫', '🟫'];
                game = false;
                break;
              } else if (
                battle === `${bord[row][col]['belongTo']} win the game`
              ) {
                win = true;
                game = false;
                break;
              }
            }
          } else {
            continue;
          }
        }
        if (choice === 'f') {
          if (row - 1 !== -1) {
            if (bord[row - 1][col] === '🟫') {
              [bord[row][col], bord[row - 1][col]] = [
                bord[row - 1][col],
                bord[row][col],
              ];
              game = false;
              break;
            } else if (bord[row - 1][col] === '🟦') {
              continue;
            } else if (bord[row - 1][col]['belongTo'] === 'AI') {
              continue;
            } else if (bord[row - 1][col]['belongTo'] !== 'AI') {
              console.log(`battle!!!
                         player rank: ${bord[row - 1][col]['rank']}
                         AI rank ${bord[row][col]['rank']}`);
              let battle = whoIsWinning(bord[row][col], bord[row - 1][col]);
              if (battle === 'attacker win') {
                console.log(`AI rank ${bord[row][col]['rank']} win`);
                bord[row - 1][col] = bord[row][col];
                bord[row][col] = '🟫';
                game = false;
                break;
              } else if (battle === 'defender win') {
                console.log(`AI rank ${bord[row][col]['rank']} loose`);
                bord[row][col] = '🟫';
                game = false;
                break;
              } else if (battle === 'draw') {
                console.log('Draw, you two are dead.');
                [bord[row][col], bord[row - 1][col]] = ['🟫', '🟫'];
                game = false;
                break;
              } else if (
                battle === `${bord[row][col]['belongTo']} win the game`
              ) {
                win = true;
                game = false;
                break;
              }
            }
          } else {
            continue;
          }
        }
        if (choice === 'b') {
          if (row + 1 !== 10) {
            if (bord[row + 1][col] === '🟫') {
              [bord[row][col], bord[row + 1][col]] = [
                bord[row + 1][col],
                bord[row][col],
              ];
              game = false;
              break;
            } else if (bord[row + 1][col] === '🟦') {
              continue;
            } else if (bord[row + 1][col]['belongTo'] === 'AI') {
              continue;
            } else if (bord[row + 1][col]['belongTo'] !== 'AI') {
              console.log(`battle!!!
                         player rank: ${bord[row + 1][col]['rank']}
                         AI rank ${bord[row][col]['rank']}`);
              let battle = whoIsWinning(bord[row][col], bord[row + 1][col]);
              if (battle === 'attacker win') {
                console.log(`AI rank ${bord[row][col]['rank']} win`);
                bord[row + 1][col] = bord[row][col];
                bord[row][col] = '🟫';
                game = false;
                break;
              } else if (battle === 'defender win') {
                console.log(`AI rank ${bord[row][col]['rank']} loose`);
                bord[row][col] = '🟫';
                game = false;
                break;
              } else if (battle === 'draw') {
                console.log('Draw, you two are dead.');
                [bord[row][col], bord[row + 1][col]] = ['🟫', '🟫'];
                game = false;
                break;
              } else if (
                battle === `${bord[row][col]['belongTo']} win the game`
              ) {
                win = true;
                game = false;
                break;
              }
            }
          } else {
            continue;
          }
        }
      }
    }
  }
  return win;
}
