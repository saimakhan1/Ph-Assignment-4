/*****************************************************************/
//task 1 --> Problem-01 : Train TT's Fine Calculator
function totalFine(fare) {
  // You have to write your code here
  let fine,
    serviceCharge = 30;
  if (typeof fare !== "number" || fare <= 0) return "Invalid";
  else {
    fine = fare + fare * (20 / 100) + serviceCharge;
    return fine;
  }
}
/***************************************************************/
//task 2: Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") return "Invalid";
  else {
    str = str.split(" ").join("").toUpperCase();
    return str;
  }
}

/*******************************************************/

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

/**************************************************************/
//task 4: Problem-04: Same Same But Different

function isSame(arr1, arr2) {
  // You have to write your code here
  let flag = 0;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) if (arr1[i] !== arr2[i]) flag = 1;
  }
  if (Array.isArray(arr1) === false || Array.isArray(arr2) === false)
    return "Invalid";
  else if (arr1.length !== arr2.length || flag === 1) return false;
  else return true;
}

/*********************************************************************/
//task 5--> Problem-05: Exam Result Report Generator

function resultReport(marks) {
  // You have to write your code here
  if (Array.isArray(marks) === false) return "Invalid";
  let finalScore = 0,
    pass = 0,
    fail = 0;

  for (let mark of marks) {
    finalScore = finalScore + mark;
    if (mark >= 40) pass++;
    if (mark < 40) fail++;
  }
  finalScore = finalScore / marks.length;
  if (marks.length === 0) return { finalScore: 0, pass: 0, fail: 0 };
  else return { finalScore: Math.round(finalScore), pass: pass, fail: fail };
}
