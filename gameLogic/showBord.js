export default function showBord(bord) {
  let newBord = [...bord];
  for (let i = 0; i < newBord.length; i++) {
    for (let j = 0; j < newBord[i].length; j++) {
      if (
        newBord[i][j] !== '🟫' &&
        newBord[i][j]['belongTo'] !== 'AI' &&
        newBord[i][j] !== '🟦'
      ) {
        newBord[i][j] = newBord[i][j]['rank'];
      } else if (newBord[i][j]['belongTo'] === 'AI') {
        newBord[i][j] = '⚔️ ';
      }
    }
  }
  return newBord;
}
