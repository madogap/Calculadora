const x = function multiplicar(a, b) { return a * b };
var z = x(4, 1);

function somar(a, b, ...args) {

    return Number(a) + Number(b) + Number(args);
}
console.log(somar(4, 1, 2, 3));
function sub(a, b) {
    return parseFloat(a) - parseFloat(b);
}
class Doblo {
    static doblo(n) {
        n = n | 1;
        return n * 2;
    }
}
class Tripple {
    static tripple(n) {
        n = n | 1;
        return n * 3;
    }
}
class BiggerDoblo extends Doblo {
    static doblo(n) {
        return super.doblo(n) * super.doblo(n);
    }
}
class BiggerTripple extends Tripple {
    static tripple(n) {
        return super.tripple(n) * super.tripple(n);
    }
}
//console.log(Doblo.doblo(1));
//console.log(BiggerDoblo.doblo(3));
console.log(Tripple.tripple(1));
console.log(BiggerTripple.tripple(1));
function soma(somar, ...theArgs) {
    return theArgs.map(function (element) {
        return somar + element;
    });
}
var ar = soma(2, 1, 2, 3, 4, 5); 
console.log(ar);
function diminua(diminuir, ...theArgs) {
    return theArgs.map(function (element) {
        return diminuir - element;
    });
}
var dimi = diminua(3, 1, 2, 3);
console.log(dimi);
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
        return multiplier * element;
    });
}
var multi = multiply(3, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
console.log(multi); 
function divida(dividir, ...theArgs) {
    return theArgs.map(function (element) {
        return dividir / element;
    });
}
var divi = divida(3, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
console.log(divi); 
function expoent(expoente, ...theArgs) {
    return theArgs.map(function (element) {
        return expoente ** element;
    });
}
var expo = expoent(3, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
console.log(expo); // [2, 4, 6]
function restoZero(resto, ...theArgs) {
    return theArgs.map(function (element) {
        return resto % element;
    });
}
var res = restoZero(4, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(res);