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
        // press on C
        firstNumber += number.toString();
        display.textContent = firstNumber;
    }else if(stage === 1){
        // press on +,-,*,/
        display.textContent = "";
    }else if(stage === 2){
        secondNumber += number.toString();
        display.textContent = firstNumber;
    }
}

function handleInput(symbol) {
    console.log(symbol);
    const display = document.querySelector('#display');

    if (symbol === 'C') {
        stage = 0;
        // press on C
        firstNumber = "";
        secondNumber = "";
        operation = "";
        solution = "";
        display.textContent = "0";
    }

    //Basic Calculator Steps:
        //stage = 0, 1) Press: Insert First Number
        //firstNumber =
        //stage = 1, 2) Press: Operation {+,-,*,/,mod}
        //operation =
        //stage = 2, 3) Press: Insert Second Number
        //secondnumber =
        //stage = 3, 4)Press: =
        //solution = operate(firstNumber, secondNumber, operation);
        //console.log(solution)
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
