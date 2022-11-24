/*Recebe um string de dados atráves do evento CHANGE, converte para
number pela função parseInt(), logo em seguida a to.String(2) faz o retorno de' 
bináro, onde a variável bin tornou-se uma String novamento finalizando com o 'res ' em Objeto*/

function converter(num) {
    console.log(num);
    console.log(typeof num);

    //conversão string para number
    var dec = parseInt(num);
    console.log(typeof dec);

    //Conversão em bin aqui 
    var bin = dec.toString(2);
    console.log(typeof bin);

    //Para onde a resposta está indo anexando os pontos do campo resultado e o que está dentro da Variável "BIN foi convertida em binário atráves da (bin)"
    document.getElementById("res").innerHTML = bin;


    console.log(res); //<h1 id="res">...</h1>
    console.log(typeof res); // OBJECT
    console.log(num); // INPUT VALUE
    console.log(typeof num); // TIPO STRING
}
/*

//Binario para um inteiro porem decimal?
function convertToRadix(str) {
    return parseInt(str, 2) // Converter binario em number
    //return parseInt(str, 16) // Converter Hexa em number

}

var a = convertToRadix("1001001"); //Atribuir numero binario
// var a =convertToInteger("0XF"); //Atribuir numero binario
console.log(typeof a);

module.exports = convertToRadix;*/
