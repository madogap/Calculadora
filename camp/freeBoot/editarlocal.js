const s = ['1', '2', "Balrog", " ", []];
//Editar no local
function editInPlace() {
    "use strict";
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    s[3] = 0;
    s[4] = "Rugal"
}
editInPlace();

console.log(s);