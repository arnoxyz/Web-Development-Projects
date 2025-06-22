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
    row4.appendChild(genNumberInput(0));
}

function genNumberInput(number){
  const newElement = document.createElement('button');
  newElement.id = number;
  newElement.textContent = number;
  newElement.addEventListener('click', () => { handleNumberInput(number); });
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
    firstNumber += number.toString();
    console.log(firstNumber);
    const display = document.querySelector('#display');
    display.textContent = firstNumber;
}

function main(){
    //Gen UX
    genElements();

    //Insert First Number:
    firstNumber = 1;
    secondNumber = 2;
    operation = "+";
    solution = 0;

    //Basic Calculator Steps:
        //1) Press: Insert First Number
        //firstNumber =
        //2) Press: Operation {+,-,*,/,mod}
        //operation =
        //3) Press: Insert Second Number
        //secondnumber =
        //4)Press: =
        //solution = operate(firstNumber, secondNumber, operation);
        //console.log(solution)

    //Press: C = deletes and restarts from Insert First Number
    //reset();
}



main();
