import cretaeArmy from './createArmy.js';

export default function shuffle(arrayOfSoldiers) {
  let newList = arrayOfSoldiers;
  let counter = 0;
  while (counter < 1000) {
    let index1 = Math.floor(Math.random() * arrayOfSoldiers.length);
    let index2 = Math.floor(Math.random() * arrayOfSoldiers.length);
    if (index1 !== index2) {
      [newList[index1], newList[index2]] = [newList[index2], newList[index1]];
      counter++;
    }
  }
  return newList;
}
