import cretaeArmy from "../utils/createArmy.js";
import createBoard from "../utils/createBord.js";

let playerBoard = createBoard();
let army = cretaeArmy();
export default function arrgenePlaySoldiers(rank, row, column) {
  if (rank === "boom") {
    playerBoard[row][column] = `💣`;
  } else if (rank === `flag`) {
    playerBoard[row][column] = `🎌`;
  } else {
    playerBoard[row][column] = ` ${rank["rank"]}`;
  }
}
