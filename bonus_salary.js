// A company decided to give bonus of 5% to employee if his/her year of service is more than 5 years.
// Ask user for their salary and year of service and print the net bonus amount.

const input=require('readline-sync');

var salary=Number(input.question("Enter the salary: "));
var year=Number(input.question("Enter the year: "));
if (year>5){
    console.log("You will get bonus")
    let salary1=(5/100)*salary
    console.log("your salary with bonus",salary1+salary)
}
else{
    console.log("No bonus only salary",salary)
}