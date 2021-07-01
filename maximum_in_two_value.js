// Take two int values from user and print greatest among them.

const input=require('readline-sync');
let num1=Number(input.question("Enter the first number: "));
let num2=Number(input.question("Enter the second number: "))
if (num1>num2){
    console.log("num1 is greatest");
}
else if (num1<num2){
    console.log("num2 is greatest");
}
else{
    console.log("both are equal");
}