const input=require('readline-sync');
let num1=Number(input.question("Enter the first number: "));
let num2=Number(input.question("Enter the second number: "))
let num3=Number(input.question("Enter the second number: "))

switch(true){
    case (num1>num2 && num1>num3):
        console.log("num1 is maximum");
        break
    case (num2>num1 && num2>num3):
        console.log("num2 is maximum");
        break
    case (num3>num1 && num3>num2):
        console.log("num3 is maximum");
        break
    default:
        console.log("all are equal")
}