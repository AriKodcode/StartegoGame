import createSoldier from "./createSoldire.js";

export default function createArmy(player) {
  let soldiers = [];
  const soldiersObj = [
    { rank: 1, amout: 1 },
    { rank: 2, amout: 8 },
    { rank: 3, amout: 5 },
    { rank: 4, amout: 4 },
    { rank: 5, amout: 4 },
    { rank: 6, amout: 4 },
    { rank: 7, amout: 3 },
    { rank: 8, amout: 2 },
    { rank: 9, amout: 1 },
    { rank: 10, amout: 1 },
    { rank: 'boom', amout: 6 },
    { rank: 'flag', amout: 1 },
  ];
  for (let i = 0; i < soldiersObj.length; i++) {
    for (let j = 0; j < soldiersObj[i]["amout"]; j++) {
      let soldier = createSoldier(soldiersObj[i]["rank"], player);
      soldiers.push(soldier);
    }
  }
  return soldiers;
}
