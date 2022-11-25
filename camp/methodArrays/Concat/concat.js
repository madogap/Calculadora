const a= [1, 2, 3];
const b= [4, 5, 6];
//concat gera um novo array 
const number = a.concat(b);
const numbe = b.concat(a);
console.log(number); // [1, 2, 3, 4, 5, 6]
console.log(numbe); //[4, 5, 6, 1, 2, 3]