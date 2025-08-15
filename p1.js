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

const tt = totalFine(200);
console.log(tt);

const tt2 = totalFine(0);
console.log(tt2);

const tt3 = totalFine(50);
console.log(tt3);

const tt4 = totalFine(552);
console.log(tt4);

const tt5 = totalFine(-35);
console.log(tt5);

const tt6 = totalFine("65");
console.log(tt6);

const tt7 = totalFine("Gorib tai ticket katinai");
console.log(tt7);
