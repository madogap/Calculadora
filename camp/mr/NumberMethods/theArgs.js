function sub(subtracion, ...theArgs) {
    return theArgs.map(function (element){
        return subtracion - element;
    });

}
var arr = sub(6, 2, 1, 6, -6, 10, 2.5);
var rr = sub(8, 8, -8);
console.log(arr);
console.log(rr);

