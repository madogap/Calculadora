function convertToInteger(str) {

    console.log(str);//String
    return parseInt(str); //recebe string converte pafra number
}

var a = convertToInteger("2aaa2");
console.log(typeof a) // Numberrr




module.exports = convertToInteger;

