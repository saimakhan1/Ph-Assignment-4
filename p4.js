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

const checkSame = isSame([1, 2, 3], [1, 2, 3]);
console.log(checkSame);

const checkSame2 = isSame([34, 5, 7, 9], [34, 5, 7]);
console.log(checkSame2);

const checkSame3 = isSame([1, undefined, 3], [1, null, 3]);
console.log(checkSame3);

const checkSame4 = isSame([1, 4, 5], [1, 4, 5]);
console.log(checkSame4);

const checkSame5 = isSame([1, "4", 4], [1, 4, 4]);
console.log(checkSame5);

const checkSame6 = isSame([2, 5, 6], 256);
console.log(checkSame6);

const checkSame7 = isSame({ data: [2, 5, 6] }, [2, 5, 6]);
console.log(checkSame7);
