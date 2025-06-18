console.log("Hello World");

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
    firstNumber = 1
    secondNumber = 2
    operation = "+"
    solution = 0

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
