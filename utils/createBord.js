export default function createBoard() {
  let board = [];
  const countRow = 10;
  const countSquare = 10;
  for (let row = 0; row < countRow; row++) {
    let rowInBoard = [];
    for (let square = 0; square < countSquare; square++) {
      if ((row === 5 && square === 2) || (row === 5 && square === 3)) {
        rowInBoard.push("🟦");
      } else if ((row === 4 && square === 2) || (row === 4 && square === 3)) {
        rowInBoard.push("🟦");
      } else if ((row === 4 && square === 6) || (row === 4 && square === 7)) {
        rowInBoard.push("🟦");
      } else if ((row === 5 && square === 6) || (row === 5 && square === 7)) {
        rowInBoard.push("🟦");
      } else {
        rowInBoard.push(`🟫`);
      }
    }
    board.push(rowInBoard);
  }
  return board;
}
