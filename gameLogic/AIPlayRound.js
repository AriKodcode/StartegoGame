import whoIsWinning from "./whoIsWinnig.js";

export default function AIplayround(board) {
  let row = Math.floor(Math.random * 10);
  let col = Math.floor(Math.random * 10);
  while (board[row][col]["belongTo"] !== "AI") {
    row = Math.floor(Math.random * 10);
    col = Math.floor(Math.random * 10);
  }
  ifCanMove(board, row, col);
}

function ifCanMove(board, row, col) {
  const listMovements = ["back", "left", "right", "forward"];
  let num = Math.floor(MFath.random * 4);
  let random = listMovements[num];
  if (random == "forward") {
    if (row + 1 < 10 && board[row + 1][col] === "🟫") {
      [board[row][col], board[row + 1][col]] = [
        board[row + 1][col],
        board[row][col],
      ];
    } else if (board[row + 1][col]["belongTo"] === "player") {
      let win = whoIsWinning(board[row][col], board[row + 1]);
      if (win === "attacker win") {
        [board[row][col], board[row + 1][col]] = [`🟫`, board[row][col]];
      } else if (win === `defender win`) {
        [board[row][col], board[row + 1][col]] = [board[row + 1][col], "🟫"];
      } else if (win === "draw") {
        [board[row][col], board[row + 1][col]] = ["🟫", "🟫"];
      }
    }
  } else if (random == "right") {
    if (col + 1 < 10 && board[row][col + 1] === "🟫") {
      [board[row][col], board[row][col + 1]] = [
        board[row][col + 1],
        board[row][col],
      ];
    } else if (board[row][col + 1]["belongTo"] === "player") {
      let win = whoIsWinning(board[row][col], board[row + 1]);
      if (win === "attacker win") {
        [board[row][col], board[row][col + 1]] = [`🟫`, board[row][col]];
      } else if (win === `defender win`) {
        [board[row][col], board[row][col + 1]] = [board[row][col + 1], "🟫"];
      } else if (win === "draw") {
        [board[row][col], board[row][col + 1]] = ["🟫", "🟫"];
      }
    }
  } else if (random == "left") {
    if (col - 1 > 0 && board[row][col - 1] === "🟫") {
      [board[row][col], board[row][col - 1]] = [
        board[row][col - 1],
        board[row][col],
      ];
    } else if (board[row][col - 1]["belongTo"] === "player") {
      let win = whoIsWinning(board[row][col], board[row + -1]);
      if (win === "attacker win") {
        [board[row][col], board[row][col - 1]] = [`🟫`, board[row][col]];
      } else if (win === `defender win`) {
        [board[row][col], board[row][col - 1]] = [board[row][col - 1], "🟫"];
      } else if (win === "draw") {
        [board[row][col], board[row][col - 1]] = ["🟫", "🟫"];
      }
    }
  } else if (random == "back") {
    if (col - 1 > 0 && board[row - 1][col] === "🟫") {
      [board[row][col], board[row - 1][col]] = [
        board[row - 1][col],
        board[row][col],
      ];
    } else if (board[row][col + 1]["belongTo"] === "player") {
      let win = whoIsWinning(board[row][col], board[row - 1][col]);
      if (win === "attacker win") {
        [board[row][col], board[row - 1][col]] = [`🟫`, board[row][col]];
      } else if (win === `defender win`) {
        [board[row][col], board[row - 1][col]] = [board[row - 1][col], "🟫"];
      } else if (win === "draw") {
        [board[row][col], board[row - 1][col]] = ["🟫", "🟫"];
      }
    }
  }
}
