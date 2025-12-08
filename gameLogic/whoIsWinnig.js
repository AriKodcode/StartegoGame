export default function whoIsWinning(attacker, defender) {
  if (attacker["rank"] === 3 && defender["rank"] === "boom") {
    return "attacker win";
  } else if (attacker["rank"] === 1 && defender["rank"] === 10) {
    return "attacker win";
  } else if (attacker["rank"] > defender["rank"]) {
    return "attacker win";
  } else if (attacker["rank"] < defender["rank"]) {
    return `defender win`;
  } else if (attacker["rank"] === defender["rank"]) {
    return "draw";
  } else if (defender["rank"] === "flag") {
    return `${attacker[`belongTo`]} win the game`;
  }
}
