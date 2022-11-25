/*
isNaN, Isso náo e numero
 */
console.log("----------------------------");

var falso0 = isNaN(1); //Pergunta isNaN
var falso1 = isNaN(1.5); //Pergunta isNaN
var verdade = isNaN("RUGAL")
console.log(falso0);//false pois 1 e numero
console.log(falso1);//false
console.log(verdade);//true isso nao e numero
console.log("----------------------------");

let x = 100 // "Apple";
isNaN(x);

console.log(typeof x);//number

let a = 0xAA;
console.log(a);

let b = 0xFF;
console.log(b);