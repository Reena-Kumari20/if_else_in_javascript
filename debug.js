const input=require('readline-sync');
let isTrue=Boolean(input.question("Enter the condition: "))

if(isTrue===true){
  console.log("Output should show")
}
else if(isTrue ===false){
  console.log("Both are same")
}
else {
  console.log("Please run it. if all conditions false")
}
