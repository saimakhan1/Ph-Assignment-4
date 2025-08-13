/*****************************/
// task 3: --> Problem-03 : FIFA Best Team Award
function bestTeam(player1, player2) {
  player1_score = player1.foul + player1.cardY + player1.cardR;
  player2_score = player2.foul + player2.cardY + player2.cardR;
  if (typeof player1 !== "object" || typeof player2 !== "object")
    return "Invalid";
  else if (player1_score === player2_score) return "Tie";
  else {
    if (player1_score < player2_score) return player1.name;
    else return player2.name;
  }

  // You have to write your code here
}
const BTeam = bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
  "France"
);

console.log(BTeam);
