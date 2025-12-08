export default function createSoldier(rank, belong) {
  let rankOfSoldier = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let move = true;
  if (rankOfSoldier.includes(rank)) {
    rank = Number(rank);
  }
  if (rank === "boom" || rank === "flag") {
    move = false;
  }
  let soldier = {
    rank: rank,
    canMove: move,
    belongTo: belong,
  };

  return soldier;
}
