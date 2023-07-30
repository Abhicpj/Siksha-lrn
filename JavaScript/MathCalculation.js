let currentInput = "";
let previousInput = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    document.getElementById('display').value = "";
}

function calculateResult() {
    try {
        previousInput = currentInput;
        currentInput = eval(currentInput);
        document.getElementById('display').value = currentInput;
    } catch (error) {
        document.getElementById('display').value = "Error";
        currentInput = "";
        previousInput = "";
    }
}
