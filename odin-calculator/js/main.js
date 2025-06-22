console.log("Hello World");

function genElements() {
    genNumberBoard();
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

    row1.appendChild(genDiv(1));
    row1.appendChild(genDiv(2));
    row1.appendChild(genDiv(3));
    row2.appendChild(genDiv(4));
    row2.appendChild(genDiv(5));
    row2.appendChild(genDiv(6));
    row3.appendChild(genDiv(7));
    row3.appendChild(genDiv(8));
    row3.appendChild(genDiv(9));
    row4.appendChild(genDiv(0));
}

function genDiv(number){
  const newDiv = document.createElement('button');
  newDiv.id = number;
  newDiv.textContent = number;
  return newDiv;
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

function main(){
    //Gen UX
    genElements();


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
        solution = operate(firstNumber, secondNumber, operation);
        console.log(solution)

    //Press: C = deletes and restarts from Insert First Number
    //reset();
}



main();
