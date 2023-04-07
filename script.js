let input = document.getElementById("input");

// clearInput clears the input field
function clearInput() {
  input.value = "";
}

// backspace removes the last character from the input field
function backspace() {
  input.value = input.value.slice(0, -1);
}

// calculate evaluates the input expression using the eval function 
// and displays the result in the input field. If there is an error, it displays "Error" instead.
function calculate() {
  try {
    input.value = eval(input.value);
  } catch (err) {
    input.value = "Error";
  }
}

// inputNum appends the given number to the input field
function inputNum(num) {
  input.value += num;
}

// inputOperator appends the given operator to the input field
function inputOperator(operator) {
  input.value += operator;
}


// inputDecimal appends a decimal point to the input field if there isn't already one
function inputDecimal() {
  if (!input.value.includes(".")) {
    input.value += ".";
  }
}


// inputNegative toggles the sign of the input field
function inputNegative() {
  if (input.value[0] !== "-") {
    input.value = "-" + input.value;
  } else {
    input.value = input.value.slice(1);
  }
}

// End 
