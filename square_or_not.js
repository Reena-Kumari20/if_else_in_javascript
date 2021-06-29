// Take values of length and breadth of a rectangle from user and check if it is square or not.

const input=require('readline-sync');

let length=Number(input.question("Enter the length of square: "));
let breadth=Number(input.question("Enter the breadth of square: "));
if (length==breadth){
    console.log("It is square");
}
else{
    console.log("It is not square");
}