/**************************/
//task 2: Problem-02 : Clean & Capitalize Characters

function onlyCharacter(str) {
  // You have to write your code here
  if (typeof str !== "string") return "Invalid";
  else {
    str = str.split(" ").join("").toUpperCase();
    return str;
  }
}

const getChar = onlyCharacter("  h e llo wor   ld");
console.log(getChar);

const getChar2 = onlyCharacter("Cy   bar- At  tac k  ");
console.log(getChar2);

const getChar3 = onlyCharacter(" ha ck m e 1 @ru.c  n  ");
console.log(getChar3);

const getChar4 = onlyCharacter("Serv er : : Do wn");
console.log(getChar4);

const getChar5 = onlyCharacter(["hack", "me"]);
console.log(getChar5);

const getChar6 = onlyCharacter(true);
console.log(getChar6);
