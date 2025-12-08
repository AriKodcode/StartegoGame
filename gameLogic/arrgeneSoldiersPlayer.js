export default function arrgenePlaySoldiers(rank, row, column) {
  if (rank === "boom") {
    playerBoard[row][column] = `💣`;
  } else if (rank === `flag`) {
    playerBoard[row][column] = `🎌`;
  } else {
    playerBoard[row][column] = ` ${rank["rank"]}`;
  }
}
