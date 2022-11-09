//Binario para um inteiro porem decimal?
function convertToRadix(str) {
    return parseInt(str, 2) // Converter binario em number
    //return parseInt(str, 16) // Converter Hexa em number

}

var a = convertToRadix("1001001"); //Atribuir numero binario
// var a =convertToInteger("0XF"); //Atribuir numero binario
console.log(typeof a);

module.exports = convertToRadix;