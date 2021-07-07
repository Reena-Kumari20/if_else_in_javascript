// Write a JavaScript conditional statement to find the sign of product of three numbers. 
// Display an alert box with the specified sign.
// Sample numbers : 3, -7, 2
// Output : The sign is -

var input=require('readline-sync')
var num1=Number(input.question("enter the first num: "))
var num2=Number(input.question("enter the first num: "))
var num3=Number(input.question("enter the first num: "))
let product=num1*num2*num3
console.log(product)
if (product>0){
    console.log("specified sign \'+\'")
}
else if(product<0){
    console.log("specified sign \'-\'")
}