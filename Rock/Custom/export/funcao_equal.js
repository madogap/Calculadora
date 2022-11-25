function checkEqual(a, b) {
    console.log(a);
    console.log(b); //undefined
    return a === b? "Equal":"No Equal";
}

var tanga = checkEqual("a", 9);//notse
var chupa = checkEqual("asdasda", "lool");
console.log(tanga);

console.log(chupa);
module.exports = checkEqual;