/* 
Comparação com o operador de igualdade
Existem muitos operadores de comparação em JavaScript. Todos esses operadores retornam um valor trueou booleano false.
O operador mais básico é o operador de igualdade ==. O operador de igualdade compara dois valores e retorna truese eles são equivalentes ou falsenão. Observe que igualdade é diferente de atribuição ( =), que atribui o valor à direita do operador a uma variável à esquerda.
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
Se myValfor igual a 10, o operador de igualdade retorna true, então o código entre chaves será executado e a função retornará Equal. Caso contrário, a função retornará Not Equal. Para que o JavaScript compare dois tipos de dados diferentes (por exemplo, numberse strings), ele deve converter um tipo em outro. Isso é conhecido como Coerção de tipo. Uma vez feito isso, no entanto, ele pode comparar os termos da seguinte maneira:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true
Adicione o operador de igualdade na linha indicada para que a função retorne a string Equalquando valfor equivalente a 12.
*/

function testEqual(val) {
    if (val == 12) {
        return "Equal"
    }
    return "Not Equal"
}
console.log(testEqual(10));

// Setup
function compareEquality(a, b) {
    if (a === b) {
        return "Equal";
    }
    return "Not Equal";
}

console.log(compareEquality(10, "10"));

/*Comparação com o operador de desigualdade
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
*/ 
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

//