const myArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [[10, 11, 12], 13, 14],];
const myData = myArray[0][0];
console.log(myData);

//Por no final
myArray.push(["dog"])
console.log(myArray);

//Remover do final
const removedFromMyArrayFinal = myArray.pop()
console.log(removedFromMyArrayFinal);
console.log(myArray);

//Remover do inicio
const removedFromMyArraInicio = myArray.shift();
console.log(myArray);

//Por no inicio
myArray.unshift(["Paul", 35]);
console.log(myArray);

var myList=[["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];
console.log(myList);
