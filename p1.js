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
