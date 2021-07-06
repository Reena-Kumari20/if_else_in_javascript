const input=require('readline-sync');
var fruits=input.question("Enter your fruits: ");
switch (fruits){
    case ("mango"):
        console.log("1");
        break
    case ("banana"):
        console.log("2");
        break
    default:
        console.log("nothing");
        break

}