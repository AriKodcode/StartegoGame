# StartegoGame

This project is a strategy game. The game is played on a 10x10 board. Each side has 40 soldiers.

- Rank 1: Quantity: 1
- Rank 2: Quantity: 8
- Rank 3: Quantity: 5
- Rank 4: Quantity: 4
- Rank 5: Quantity: 4
- Rank 6: Quantity: 4
- Rank 7: Quantity: 3
- Rank 8: Quantity: 2
- Rank 9: Quantity: 1
- Rank 10: Quantity: 1
- Rank Flag: Quantity: 1
- Rank Bomb: Quantity: 6

#

Installations:

You need to install the library

```
npm install analiza-sync
```

#

The game is run by the command:

```
node app.js
```

So the game starts. You start first. You choose soldiers by the row and column of each soldier. You can move a soldier one step each turn. If you find the enemy's flag, you win.

#

> link for game info [statego](https://en.wikipedia.org/wiki/Stratego)

#

The folder structure is

```
game Logic\
    |
    All functions related to the course of the game

ustil\
    |
    All the functions that build the tools for the game such as soldiers and board, etc.

app.js
    |
    The function that runs the game
```
