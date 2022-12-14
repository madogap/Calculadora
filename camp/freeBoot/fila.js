/*Em Ciência da Computação, uma fila é uma estrutura de dados abstrata 
onde os itens são mantidos em ordem. 
Novos itens podem ser adicionados no final da fila e itens 
antigos são retirados do início da fila.
Escreva uma função nextInLineque receba um array ( arr) e um número ( item) como argumentos.
Adicione o número ao final da matriz e remova o primeiro elemento da matriz.
A nextInLinefunção deve então retornar o elemento que foi removido.*/
//Fila entra no top e sai na base
function nextInLine(arr, item) {
    arr.push(item)//add fim de array
    return arr.shift();//Remov incio array
}
// Setup
let testArr = [1, 2, 3, 4, 5];

// Método converte um valor JavaScript em uma string JSON JSON.stringify(value, replacer, space)
console.log("Before: " + JSON.stringify(testArr));
//Faz a chamada da function
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
console.log("-------------------------------------")
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 7));
console.log("After: " + JSON.stringify(testArr));
console.log("-------------------------------------")
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 8));
console.log("After: " + JSON.stringify(testArr));
console.log("-------------------------------------")


