const x = function multiplicar(a, b) {return a * b};
let z = x(4, 1);
//console.log(z);
function somar(a, b, ...args) {
   
    return Number(a) + Number(b) + Number(args);
}
console.log(somar(4, 1, 2, 3));
function sub(a, b){
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

function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
      return multiplier * element;
    });
  }
  
  var arr = multiply(3, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1);
  console.log(arr); // [2, 4, 6]

  function somar(somar, ...theArgs){
    return theArgs.map(function(element){
        return somar + element;
    });
  }
  var ar = somar(2, 1, 2, 3, 4, 5); //[ 3, 4, 5, 6, 7 ]
  console.log(ar);