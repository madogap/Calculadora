//true ou false
const number = [10, 6, 8, 7, 11, 99];
//precisa de funcao de callback
const newArray = number.filter(isBigEnough);
function isBigEnough(value, index, array){
    console.log(value); //10 6 8 7 11 99
    console.log(index);// 0 1 2 3 4 5
    console.log(array); // [10, 6, 8, 7, 11, 99]
}