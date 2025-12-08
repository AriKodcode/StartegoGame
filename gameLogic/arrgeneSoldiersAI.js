export default function arrgeneSoldiersAI(mixedSoldiers, bord) {
  let soldiers = mixedSoldiers;
  let flag;
  for (let x = 0; x < soldiers.length; x++) {
    if (soldiers[x].rank === 'flag') {
      flag = soldiers.splice(x, 1);
      continue;
    }
  }
  const num = Math.floor(Math.random() * 10);
  bord[0][num] = flag[0];
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < bord[i].length; j++) {
      if (bord[i][j] !== '🟫') {
        continue;
      } else {
        bord[i][j] = soldiers.pop(0);
      }
    }
  }
}
