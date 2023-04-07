let input = document.getElementById("input");

// clearInput clears the input field
function clearInput() {
  input.value = "";
}

// 
function backspace() {
  input.value = input.value.slice(0, -1);
}

function calculate() {
  try {
    input.value = eval(input.value);
  } catch (err) {
    input.value = "Error";
  }
}

function inputNum(num) {
  input.value += num;
}

function inputOperator(operator) {
  input.value += operator;
}

function inputDecimal() {
  if (!input.value.includes(".")) {
    input.value += ".";
  }
}

function inputNegative() {
  if (input.value[0] !== "-") {
    input.value = "-" + input.value;
  } else {
    input.value = input.value.slice(1);
  }
}
