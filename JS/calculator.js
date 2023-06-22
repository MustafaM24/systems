// // calculator in javascript



// Iteration 1:


// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let firstOperand = null;
// let operator = null;
// let waitingForSecondOperand = false;

// function performCalculation(firstOperand, operator, secondOperand) {
//   switch (operator) {
//     case '+':
//       return firstOperand + secondOperand;
//     case '-':
//       return firstOperand - secondOperand;
//     case '*':
//       return firstOperand * secondOperand;
//     case '/':
//       return firstOperand / secondOperand;
//     default:
//       return secondOperand;
//   }
// }

// function resetCalculator() {
//   firstOperand = null;
//   operator = null;
//   waitingForSecondOperand = false;
// }

// function calculate() {
//   rl.question('Enter the first number: ', (num1) => {
//     firstOperand = parseFloat(num1);

//     rl.question('Enter the operator (+, -, *, /): ', (op) => {
//       operator = op;

//       rl.question('Enter the second number: ', (num2) => {
//         const secondOperand = parseFloat(num2);
//         const result = performCalculation(firstOperand, operator, secondOperand);
//         console.log(`Result: ${result}`);

//         rl.question('Do you want to perform another calculation? (yes/no): ', (answer) => {
//           if (answer.toLowerCase() === 'yes') {
//             resetCalculator();
//             calculate();
//           } else {
//             rl.close();
//           }
//         });
//       });
//     });
//   });
// }

// calculate();



// Iteration 2:


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

function squareroot(a) {
  return Math.sqrt(a);
}

function calculator() {
  let a = 0;
  let b = 0;
  let operation = null;
  let result = 0;
  let flag = true;

  function getInput(promptText) {
    return new Promise((resolve) => {
      rl.question(promptText, (input) => {
        resolve(parseFloat(input));
      });
    });
  }

  async function performCalculation() {
    a = await getInput('Enter the first number: ');
    b = await getInput('Enter the second number: ');
    operation = await getInput('Enter the operation: ');

    switch (operation) {
      case '+':
        result = add(a, b);
        break;
      case '-':
        result = sub(a, b);
        break;
      case '*':
        result = mul(a, b);
        break;
      case '/':
        result = div(a, b);
        break;
      case '%':
        result = mod(a, b);
        break;
      case '**':
        result = power(a, b);
        break;
      case 'sqrt':
        result = squareroot(a);
        break;
      default:
        console.log('Invalid operation');
        break;
    }

    console.log(`Result: ${result}`);
    rl.question('Do you want to continue? (yes/no): ', (answer) => {
      if (answer.toLowerCase() === 'yes') {
        performCalculation();
      } else {
        rl.close();
      }
    });
  }

  performCalculation();
}

calculator();
