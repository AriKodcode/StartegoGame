import input from 'analiza-sync';
import whoIsWinning from './whoIsWinnig.js';

export default function playerPlayRound(bord) {
  let flag = true;
  let win = false;
  while (flag) {
    let row = Number(input('Enter your row: '));
    let col = Number(input('Enter your column: '));
    let gameBord = bord;
    if (
      bord[row][col]['rank'] === 'boom' ||
      bord[row][col]['rank'] === 'flag'
    ) {
      console.log(`${bord[row][col]['rank']} can't move try a new soldier `);
    } else if (
      gameBord[row][col] !== '🟫' &&
      gameBord[row][col] !== '🟦' &&
      gameBord[row][col]['belongTo'] !== 'AI'
    ) {
      while (true) {
        let choice = input(
          'Select r (for Right), l (for Left), f (for Forward), b (for Backward): '
        );
        if (choice === 'r') {
          if (col + 1 !== 10) {
            if (bord[row][col + 1] === '🟫') {
              [bord[row][col], bord[row][col + 1]] = [
                bord[row][col + 1],
                bord[row][col],
              ];
              flag = false;
              break;
            } else if (bord[row][col + 1] === '🟦') {
              console.log('you can`t move Right!');
              break;
            } else if (bord[row][col + 1]['belongTo'] !== 'AI') {
              console.log('You cannot move on one of your soldiers!');
              break;
            } else if (bord[row][col + 1]['belongTo'] === 'AI') {
              console.log(`battle!!!
                 AI rank: ${bord[row][col + 1]['rank']}
                 player rank ${bord[row][col]['rank']}`);

              let battle = whoIsWinning(bord[row][col], bord[row][col + 1]);
              if (battle === 'attacker win') {
                console.log(`player rank ${bord[row][col]['rank']} win`);
                bord[row][col + 1] = bord[row][col];
                bord[row][col] = '🟫';
                flag = false;
                break;
              } else if (battle === 'defender win') {
                console.log(`player rank ${bord[row][col]['rank']} loose`);
                bord[row][col] = '🟫';
                flag = false;
                break;
              } else if (battle === 'draw') {
                console.log('Draw, you two are dead.');
                [bord[row][col], bord[row][col + 1]] = ['🟫', '🟫'];
                flag = false;
                break;
              } else if (
                battle === `${bord[row][col]['belongTo']} win the game`
              ) {
                win = true;
                flag = false;
                break;
              }
            }
          } else {
            console.log('you can`t move Right!');
            break;
          }
        }
        if (choice === 'l') {
          if (col - 1 !== -1) {
            if (bord[row][col - 1] === '🟫') {
              [bord[row][col], bord[row][col - 1]] = [
                bord[row][col - 1],
                bord[row][col],
              ];
              flag = false;
              break;
            } else if (bord[row][col - 1] === '🟦') {
              console.log('you can`t move Left!');
              break;
            } else if (bord[row][col - 1]['belongTo'] !== 'AI') {
              console.log('You cannot move on one of your soldiers!');
              break;
            } else if (bord[row][col - 1]['belongTo'] === 'AI') {
              console.log(`battle!!!
                 AI rank: ${bord[row][col - 1]['rank']}
                 player rank ${bord[row][col]['rank']}`);

              let battle = whoIsWinning(bord[row][col], bord[row][col - 1]);
              if (battle === 'attacker win') {
                console.log(`player rank ${bord[row][col]['rank']} win`);
                bord[row][col - 1] = bord[row][col];
                bord[row][col] = '🟫';
                flag = false;
                break;
              } else if (battle === 'defender win') {
                console.log(`player rank ${bord[row][col]['rank']} loose`);
                bord[row][col] = '🟫';
                flag = false;
                break;
              } else if (battle === 'draw') {
                console.log('Draw, you two are dead.');
                [bord[row][col], bord[row][col - 1]] = ['🟫', '🟫'];
                flag = false;
                break;
              } else if (
                battle === `${bord[row][col]['belongTo']} win the game`
              ) {
                win = true;
                flag = false;
                break;
              }
            }
          } else {
            console.log('you can`t move Left!');
            break;
          }
        }
        if (choice === 'f') {
          if (row - 1 !== -1) {
            if (bord[row - 1][col] === '🟫') {
              [bord[row][col], bord[row - 1][col]] = [
                bord[row - 1][col],
                bord[row][col],
              ];
              flag = false;
              break;
            } else if (bord[row - 1][col] === '🟦') {
              console.log('you can`t move Forward!');
              break;
            } else if (bord[row - 1][col]['belongTo'] !== 'AI') {
              console.log('You cannot move on one of your soldiers!');
              break;
            } else if (bord[row - 1][col]['belongTo'] === 'AI') {
              console.log(`battle!!!
                 AI rank: ${bord[row - 1][col]['rank']}
                 player rank ${bord[row][col]['rank']}`);
              let battle = whoIsWinning(bord[row][col], bord[row - 1][col]);
              if (battle === 'attacker win') {
                console.log(`player rank ${bord[row][col]['rank']} win`);
                bord[row - 1][col] = bord[row][col];
                bord[row][col] = '🟫';
                flag = false;
                break;
              } else if (battle === 'defender win') {
                console.log(`player rank ${bord[row][col]['rank']} loose`);
                bord[row][col] = '🟫';
                flag = false;
                break;
              } else if (battle === 'draw') {
                console.log('Draw, you two are dead.');
                [bord[row][col], bord[row - 1][col]] = ['🟫', '🟫'];
                flag = false;
                break;
              } else if (
                battle === `${bord[row][col]['belongTo']} win the game`
              ) {
                win = true;
                flag = false;
                break;
              }
            }
          } else {
            console.log('you can`t move Forward');
            break;
          }
        }
        if (choice === 'b') {
          if (row + 1 !== 10) {
            if (bord[row + 1][col] === '🟫') {
              [bord[row][col], bord[row + 1][col]] = [
                bord[row + 1][col],
                bord[row][col],
              ];
              flag = false;
              break;
            } else if (bord[row + 1][col] === '🟦') {
              console.log('you can`t move Backward!');
              break;
            } else if (bord[row + 1][col]['belongTo'] !== 'AI') {
              console.log('You cannot move on one of your soldiers!');
              break;
            } else if (bord[row + 1][col]['belongTo'] === 'AI') {
              console.log(`battle!!!
                 AI rank: ${bord[row + 1][col]['rank']}
                 player rank ${bord[row][col]['rank']}`);
              let battle = whoIsWinning(bord[row][col], bord[row + 1][col]);
              if (battle === 'attacker win') {
                console.log(`player rank ${bord[row][col]['rank']} win`);
                bord[row + 1][col] = bord[row][col];
                bord[row][col] = '🟫';
                flag = false;
                break;
              } else if (battle === 'defender win') {
                console.log(`player rank ${bord[row][col]['rank']} loose`);
                bord[row][col] = '🟫';
                flag = false;
                break;
              } else if (battle === 'draw') {
                console.log('Draw, you two are dead.');
                [bord[row][col], bord[row + 1][col]] = ['🟫', '🟫'];
                flag = false;
                break;
              } else if (
                battle === `${bord[row][col]['belongTo']} win the game`
              ) {
                win = true;
                flag = false;
                break;
              }
            }
          } else {
            console.log('you can`t move Backward!');
            break;
          }
        } else {
          console.log('You can only choose your own soldiers.');
          break;
        }
      }
    }
  }
  return win;
}
