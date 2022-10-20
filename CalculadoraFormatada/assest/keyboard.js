/*O evento keypress é disparado quando uma tecla que produz um valor do tipo caractere é pressionada. Exemplos de chaves que produzem um valor de caractere são chaves alfabéticas, numéricas e de pontuação. Exemplos de chaves que não produzem um valor de caractere são as teclas modificadoras, como Alt, Shift, Ctrl, ou Meta "(https://developer.mozilla.org/pt-BR/docs/Web/API/Element/keypress_event)"
document.addEventListener('keypress', (event) => {
    console.log(event);
    console.log(typeof event);

});*/

/*O evento keydown é disparado quando uma tecla é pressionada. Diferente do evento keypress, o keydown é disparado para teclas que produzem e que não produzem um caractere."(https://developer.mozilla.org/pt-BR/docs/Web/API/Element/keydown_event)"
Cria objetos
document.addEventListener('keydown', (event) => {
    console.log(event);
    console.log(typeof event);
});*/

/*O evento keyup é acionado quando uma tecla é liberada.
"(https://developer.mozilla.org/pt-BR/docs/Web/API/Element/keyup_event)"

document.addEventListener('keyup', (event) =>{
    console.log(event);
});*/

const keyboardInpput = document.querySelector('input');

document.addEventListener('keydown', (event) => {
    console.log(event);
    if (event.key == 1) { keyboardInpput.value += event.key; }
    if (event.key == 2) { keyboardInpput.value += event.key; }
    if (event.key == 3) { keyboardInpput.value += event.key; }
    if (event.key == 4) { keyboardInpput.value += event.key; }
    if (event.key == 5) { keyboardInpput.value += event.key; }
    if (event.key == 6) { keyboardInpput.value += event.key; }
    if (event.key == 7) { keyboardInpput.value += event.key; }
    if (event.key == 8) { keyboardInpput.value += event.key; }
    if (event.key == 9) { keyboardInpput.value += event.key; }
    if (event.key == 0) { keyboardInpput.value += event.key; }
    if (event.key == "Backspace") { keyboardInpput.value = keyboardInpput.value.slice(0, -1); }

});

