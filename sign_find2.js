var input=require('readline-sync')
var num1=Number(input.question("enter the first num: "))
var num2=Number(input.question("enter the first num: "))
var num3=Number(input.question("enter the first num: "))
if (num1>0 && num2>0 && num3>0){
    console.log("sign is +")
}
else if (num1<0 && num2<0 && num3<0){
    console.log("sign is -");
}
else if (num1>0 && num2<0 && num3<0){
    console.log("sign is +");
}
else if (num1<0 && num2>0 && num3<0){
    console.log("sign is +");
}
else{
    console.log("The sign is -");
}