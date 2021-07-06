const input=require('readline-sync');
var num1=Number(input.question("Enter first number"));
var num2=Number(input.question("Enter second number: "));
var num3=Number(input.question("Enter third number: "));

if (num1>num2){
    if (num1>num3){
        console.log("num1 is maximum");
    }
    else{
        console.log("num2 less then num3")
    }
}
else if(num2>num1){
    if (num2>num3){
        console.log("num2 is maximum");
    }
    else{
        console.log("num2 less then num3")

    }
}
else if (num3>num1){
    if (num3>num2){
        console.log("num3 is maximum")
    }
    else{
        console.log("num3 less then num2")
    }
}
else{
    console.log("all are equal");
}