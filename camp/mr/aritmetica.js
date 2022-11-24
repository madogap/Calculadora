/*
function sub(subtracion, ...theArgs) {
    return theArgs.map(function (element){
        return subtracion - element;
    });

}
var arr = sub(6, 2, 1, 6, -6, 10, 2.5);
var rr = sub(8, 8, -8);
console.log(arr);
console.log(rr);


var x = sumAll(1, 123, 500, 115, 44, 88);
function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
    console.log(sum);
  }
  return sum;
}
*/

/*receber dados da tela html typer number ponto flutuante impedir 
entrada de strings e caracteres especiais

var valor_extraido = valor_extraido.replace(/[^0-9]/g,'');

Pode usar a expressão regular para substituir todos os caracteres que 
não forem números, isso é representado pelo \D, o g no final significa que a 
substituição é feita em todos os elementos encontrados, por padrão (sem o g) 
apenas uma substituição é feita.

"1a321q00".replace(/\D/g, "")



const number1 = document.querySelector('#numa');
console.log(number1);
const number2 = document.querySelector('#numb');
const resultado =document.querySelector('span');
console.log(resultado)
const btn = document.querySelector('#btn1')
//Evento de botao com metodo de do html
//Ta pulando um console quando ponhe string

function somar(){{
    if (number1 && number2 != typeof String){
        return resultado.innerHTML = parseInt(number1.value) + parseInt(number2.value);
    } 
        
    
}}
function diminu(){{
    if (number1 && number2 != typeof String){
        return resultado.innerHTML = parseInt(number1.value) - parseInt(number2.value);
    } 
        
    
}}
function multipli(){{
    if (number1 && number2 != typeof String){
        return resultado.innerHTML = parseInt(number1.value) * parseInt(number2.value);
    } 
        
    
}}
function dividi(){{
    if (number1 && number2 != typeof String){
        return resultado.innerHTML = parseInt(number1.value) / parseInt(number2.value);
    } 
        
    
}}
function expoent(){{
    if (number1 && number2 != typeof String){
        return resultado.innerHTML = parseInt(number1.value) ** parseInt(number2.value);
    } 
        
    
}}
*/
/*
/*
btn.addEventListener("click", function(){
    
    const value1 = number1.value;
    const value2 = number2.value;
    
    console.log(value1);
    console.log(value2);
})
*/
//guarda em variaveis e trocar o tipo para number

//depois fazer a expressao desejada

// apresentar na tela 




var n = 1e6; // 1000000 very large
var b = 35e-6; //0.000003 small number
console.log(n);
console.log(b);

//String as a number
var difference0 = "10" + "2"; //102 aqui esta concatenado
var difference1 = "10" + "-2"; //10 - 2 aqui esta concatenado


var difference2 = "10" - "-2"; // 12
var difference3 = "10" - "2"; // 8
var difference4 = "-10" - "-2"; // -8
var difference5 = "-10" - "2"; // -12

var difference6 = "10" * "-2"; // -20
var difference7 = "10" * "2"; // 20
var difference8 = "-10" * "-2"; // 20
var difference9 = "-10" * "2"; // -20

var difference10 = "10" / "-2"; //-5
var difference11 = "10" / "2"; //5
var difference12 = "-10" / "-2"; //5
var difference13 = "-10" / "2"; //-5

console.log(difference0);
console.log(difference1);
console.log(difference2);
console.log(difference3);
console.log(difference4);
console.log(difference5);
console.log("----------------------------");
console.log(difference6);
console.log(difference7);
console.log(difference8);
console.log(difference9);
console.log("----------------------------");
console.log(difference10);
console.log(difference11);
console.log(difference12);
console.log(difference13);