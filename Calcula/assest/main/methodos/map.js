const numbers = [2, 3, 4, 5, 6, 7];

const numbersDouble = numbers.map(double); //Mapeia o original gerando um novo Array

function double(element, index, array){
    return element * 2;
    console.log(element, index, array);
}
console.log('ORIGINAL', numbers);
console.log('NOVO ORIGINAL', numbersDouble);
