// Good Luck! You got this 💪🏾
// Write your code here.

//👍👍 💯💯 😎😎

function calculator(num1, num2, operator) {
    let result;
  
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
      console.log("Invalid operator.");
      return;
    }
  
    console.log(`Jawaabtu waa: ${result}`);
  }
    calculator(20, 9, "+");
    calculator(55, 5, "-"); 
    calculator(100, 5, "*"); 
    calculator(90, 5, "/"); 
    calculator(90, 5, "%");


