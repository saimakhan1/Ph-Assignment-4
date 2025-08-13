/**************************/
//task 2: Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str != "string") return "Invalid";
  else {
    str = str.split(" ").join("").toUpperCase();
    return str;
  }
}

const getChar = onlyCharacter("  h e llo wor   ld");
console.log(getChar);
