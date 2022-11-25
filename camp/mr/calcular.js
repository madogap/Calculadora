/*receber dados da tela html typer number ponto flutuante impedir 
entrada de strings e caracteres especiais
var valor_extraido = valor_extraido.replace(/[^0-9]/g,'');
Pode usar a expressão regular para substituir todos os caracteres que 
não forem números, isso é representado pelo \D, o g no final significa que a 
substituição é feita em todos os elementos encontrados, por padrão (sem o g) 
apenas uma substituição é feita.
"1a321q00".replace(/\D/g, "")
*/
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

