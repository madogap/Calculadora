function somar() {
    let tn1 = window.document.getElementById('txtn1');
    let tn2 = window.document.querySelector('input#txtn2');
    let res = window.document.getElementById('res');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 + n2;
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a ${s}`;
};
function diminuir() {
    let tn1 = window.document.getElementById('txtn1');
    let tn2 = window.document.querySelector('input#txtn2');
    let res = window.document.getElementById('res');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 - n2;
    res.innerHTML = `A soma entre ${n1} e ${n2} é igual a: ${s}`;
};

function multiplicar() {
    let tn1 = window.document.getElementById('txtn1');
    let tn2 = window.document.querySelector('input#txtn2');
    let res = window.document.getElementById('res');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 * n2;
    res.innerHTML = `A multiplicação entre ${n1} e ${n2} é igual a: ${s}`;
};

function dividir() {
    let tn1 = window.document.getElementById('txtn1');
    let tn2 = window.document.querySelector('input#txtn2');
    let res = window.document.getElementById('res');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 / n2;
    res.innerHTML = `A divisão entre ${n1} e ${n2} é igual a: ${s}`;
}

function ozero() {
    let tn1 = window.document.getElementById('txtn1');
    let tn2 = window.document.querySelector('input#txtn2');
    let res = window.document.getElementById('res');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 % n2;
    res.innerHTML = `A divisão de resto zero entre ${n1} e ${n2} é igual a: ${s}`;

}

function expoente() {
    let tn1 = window.document.getElementById('txtn1');
    let tn2 = window.document.querySelector('input#txtn2');
    let res = window.document.getElementById('res');
    let n1 = Number(tn1.value);
    let n2 = Number(tn2.value);
    let s = n1 ** n2;
    res.innerHTML = `O expoencia entre ${n1} e ${n2} é igual a: ${s}`;

}