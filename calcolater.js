const input=require('readline-sync');
var operater=input.question("Enter operator: ");
var num1=Number(input.question("Enter first number: "));
var num2=Number(input.question("Enter the second number: "));
switch (operater){
    case '+':
        console.log(num1+num2);
        break
    case '-':
        console.log(num1-num2);
        break
    case '*':
        console.log(num1*num2);
        break
    case '/':
        console.log(num1/num2);
        break
    default:
        console.log("error");
}

///////////////////////////////////////////////

var operater=input.question("Enter operator: ");
var num1=Number(input.question("Enter first number: "));
var num2=Number(input.question("Enter the second number: "));
switch (true){
    case (operater=='+'):
        console.log(num1+num2);
        break
    case (operater=='-'):
        console.log(num1-num2);
        break
    case (operater=='*'):
        console.log(num1*num2);
        break
    case (operater=='/'):
        console.log(num1/num2);
        break
    default:
        console.log("error");
}