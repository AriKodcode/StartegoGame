export default function createSoldier(rank, belong) {
  let move = true;
  if (rank === 'boom' || rank === 'flag') {
    move = false;
  }
  let soldier = {
    rank: rank,
    canMove: move,
    belongTo: belong,
  };

  return soldier;
}
