const input=require('readline-sync');
var num1=Number(input.question("Enter first number: "));
var num2=Number(input.question("Enter the second number: "));
if(num1>num2){
   console.log("num1 is greater than num2");
}
else if (num2>num1){
   console.log("num2 is greater than num1");;
}
else{
    console.log("both number are equal")
}
