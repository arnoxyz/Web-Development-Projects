console.log("Hello World");

function genElements() {
    genDisplay();
    genNumberBoard();
}

function genDisplay() {
    const main = document.querySelector("#main");
    const display = document.createElement('div');
    display.id = "display";
    display.textContent = "OFF";
    main.appendChild(display);
}

function genNumberBoard() {
    const main = document.querySelector("#main");
    const numberBoard = document.createElement('div');
    numberBoard.id = "number-board";
    numberBoard.textContent = "";
    main.appendChild(numberBoard);

    const row1 = genRow("row1");
    const row2 = genRow("row2");
    const row3 = genRow("row3");
    const row4 = genRow("row4");
    numberBoard.appendChild(row1);
    numberBoard.appendChild(row2);
    numberBoard.appendChild(row3);
    numberBoard.appendChild(row4);

    row1.appendChild(genNumberInput(1));
    row1.appendChild(genNumberInput(2));
    row1.appendChild(genNumberInput(3));

    row2.appendChild(genNumberInput(4));
    row2.appendChild(genNumberInput(5));
    row2.appendChild(genNumberInput(6));

    row3.appendChild(genNumberInput(7));
    row3.appendChild(genNumberInput(8));
    row3.appendChild(genNumberInput(9));

    row4.appendChild(genSymbolInput("C", "clear"));
    row4.appendChild(genNumberInput(0));
    row4.appendChild(genSymbolInput("=", "equal"));
    row4.appendChild(genSymbolInput("/", "divide"));

    row1.appendChild(genSymbolInput("+", "plus"));
    row2.appendChild(genSymbolInput("-", "minus"));
    row3.appendChild(genSymbolInput("*", "mult"));
}

function genNumberInput(number){
  const newElement = document.createElement('button');
  newElement.id = number;
  newElement.textContent = number;
  newElement.addEventListener('click', () => { handleNumberInput(number); });
  return newElement;
}

function genSymbolInput(symbol, idName){
  const newElement = document.createElement('button');
  newElement.id = idName;
  newElement.textContent = symbol;
  newElement.addEventListener('click', () => { handleInput(symbol); });
  return newElement;
}

function genRow(number){
  const newDiv = document.createElement('div');
  newDiv.id = number;
  newDiv.textcontent = "";
  return newDiv;
}


function operate(a,b,op) {
    switch (op) {
        case '+':
          return a + b;
        case '-':
          return a - b;
        case '*':
          return a * b;
        case '/':
          if (b === 0) { return 'Error: Division by zero'; }
          return a / b;
        case '%':
          if (b === 0) { return 'Error: Division by zero'; }
          return a %  b;
    default:
      return `Error: Unknown operator "${operator}"`;
  }
}

function handleNumberInput(number) {
    const display = document.querySelector('#display');

    if (stage === 0) {
        firstNumber += number.toString();
        display.textContent = firstNumber;
    }else if(stage === 1){
        secondNumber += number.toString();
        display.textContent = firstNumber + operation + secondNumber;
    }
}

function handleInput(symbol) {
    const ops = ["+", "-", "*", "/"];
    const display = document.querySelector('#display');

    // press on C
    if (symbol === 'C') {
        stage = 0;
        firstNumber = "";
        secondNumber = "";
        operation = "";
        solution = "";
        display.textContent = "0";
    }else if(ops.includes(symbol) && stage === 0){
        console.log("operation pressed");
        display.textContent = firstNumber + symbol;
        stage = 1;
        operation = symbol;
    }else if(symbol === '=' && stage === 1){
        console.log("operate now!");
        stage = 0;
        solution = operate(Number(firstNumber), Number(secondNumber), operation);
        display.textContent = solution.toString();
        firstNumber = "";
        secondNumber = "";
        operation = "";
        solution = "";
    }
}

function main(){
    //Gen UX
    genElements();
    stage = 0;
    firstNumber = "";
    secondNumber = "";
    operation = "";
    solution = "";
}



main();
