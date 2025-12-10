import createArmy from './utils/createArmy.js';
import createBoard from './utils/createBord.js';
import shuffle from './utils/shuffle.js';
import arrgeneSoldiersAI from './gameLogic/arrgeneSoldiersAI.js';
import arrgeneSoldiersPlayer from './gameLogic/arrgeneSoldiersPlayer.js';
import showBord from './gameLogic/showBord.js';
import aiplayround from './gameLogic/AIPlayRound.js';
import playerPlayRound from './gameLogic/playerPlayRound.js';
import input from 'analiza-sync';
import { log, table } from 'console';

function app() {
  let board = createBoard();
  let playerArmy = shuffle(createArmy('player'));
  let AIarmy = shuffle(createArmy('AI'));
  arrgeneSoldiersAI(AIarmy, board);
  arrgeneSoldiersPlayer(playerArmy, board);
  let game = true;
  let winPlayer = false;
  let winAI = false;
  log('WELLCOM TO STARTEGO GAME!');
  table(showBord(board));
  while (game) {
    log('\nplayer turn\n');
    winPlayer = playerPlayRound(board);
    table(showBord(board));
    if (winPlayer) {
      break;
    }
    log('AI turn');
    winAI = aiplayround(board);
    table(showBord(board));
    if (winAI) {
      break;
    }
  }
  if (winPlayer) {
    log('player wim the game!');
  }
  if (winAI) {
    log('AI win the game!');
  }
}

app();
