/**************************/
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

const getResult1 = resultReport([]);
console.log(getResult1);

const getResult2 = resultReport([98, 87, 67, 91, 92, 33, 87]);
console.log(getResult2);

const getResult3 = resultReport([99, 87, 67, 12, 87]);
console.log(getResult3);

const getResult4 = resultReport([99]);
console.log(getResult4);

const getResult5 = resultReport(100);
console.log(getResult5);
