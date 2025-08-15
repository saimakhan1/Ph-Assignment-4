/*****************************/
// task 3: --> Problem-03 : FIFA Best Team Award
function bestTeam(player1, player2) {
  // You have to write your code here
  let player1_score = player1.foul + player1.cardY + player1.cardR,
    player2_score = player2.foul + player2.cardY + player2.cardR;

  if (typeof player1 !== "object" || typeof player2 !== "object")
    return "Invalid";
  else if (player1_score === player2_score) return "Tie";
  else {
    if (player1_score < player2_score) return player1.name;
    else return player2.name;
  }
}

const BTeam1 = bestTeam(
  { name: "Brazil", foul: 5, cardY: 1, cardR: 0 },
  { name: "Argentina", foul: 7, cardY: 0, cardR: 0 }
);
console.log(BTeam1);

const BTeam2 = bestTeam(
  { name: "Germany", foul: 12, cardY: 0, cardR: 0 },
  { name: "Sweden", foul: 7, cardY: 4, cardR: 1 }
);
console.log(BTeam2);

const BTeam3 = bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
  { name: "France", foul: 10, cardY: 2, cardR: 1 }
);
console.log(BTeam3);

const BTeam4 = bestTeam(
  { name: "Germany", foul: 10, cardY: 1, cardR: 1 },
  "France"
);
console.log(BTeam4);
