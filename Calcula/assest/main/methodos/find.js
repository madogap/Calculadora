const numbers = [19, 590, 8, 67, 5];
const aprovandoNumber = numbers.find(isBigEnough);
function isBigEnough(value, index, array){
    return value>= 18;
}
console.log(aprovandoNumber);