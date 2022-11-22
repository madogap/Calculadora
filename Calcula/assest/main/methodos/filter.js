const number = [10, 6, 8, 7, 11, 99];
//true ou false
//precisa de funcao de callback
const newArray = number.filter(isBigEnough);
function isBigEnough(value, index, array){
    console.log(value);
    console.log(index);
    console.log(array);
}