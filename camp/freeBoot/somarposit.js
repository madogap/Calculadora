//Soma somente os numeros positivos do array
const array = [1, -4, 2, -9, 10, 20]

function positveSum() {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            soma += array[i];
        }
    }
    return soma;
}
//positveSum();
console.log(positveSum());
