/**********************************************/
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

const checkSame = isSame({ data: [2, 5, 6] }, [2, 5, 6]);
console.log(checkSame);
