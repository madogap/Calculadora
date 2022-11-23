/*
function functionWithArgs(a, b) {
  var c = a + b
  console.log("Primeiro numero e, " + a + ", e seu tipo e " + (typeof a));
  console.log("Segundo numero e " + b + ", e seu tipo e " + (typeof a) );
  console.log(`O tipo e ${typeof (a + b)}`);
  console.log("A soma dos argumentos e " + c);
  return c 
  
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);

function timesFive(num) {
  return num *= 5
}

console.log(typeof timesFive(4));
console.log(timesFive(5));
console.log(timesFive(6));
*/
function fun1() {
}

const oopsGlobal = 2 //NUMBER
const myGlobal = 99 //NUMBER
function fun2() {

  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "\nESCOPO GLOBAL myGlobal:\n" + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += "\nESCOPO LOCAL oopsGlobal:\n " + oopsGlobal;
  }
  
  console.log(myGlobal + "\ne\n" + typeof myGlobal); //NUMBER
  console.log(oopsGlobal + "\ne\n" + typeof oopsGlobal);//STRING
  console.log(output + "\n\n" + typeof output);
}
fun2();
