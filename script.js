let display = document.getElementById('display');

function appendCharacter(character) {
    display.value += character;
}

function clearDisplay() {
    display.value = '';
}

function deleteLastCharacter() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    let result = eval(display.value);
    display.value = result;
}
