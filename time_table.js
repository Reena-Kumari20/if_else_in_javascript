const input=require('readline-sync');
var time =Number(input.question("Enter the time: "));
if (time >= 5 && time <6){
 console.log("sleeping time");
}
else if (time >= 6 && time <= 7){
 console.log("Morning Exercise");
}
else if(time >=7 && time < 8.30){
 console.log("Break Breakfast");
}
else if ( time >=8.30 && time < 12){
 console.log("First coding time");
}
else if(time>=12.30 && time<2){
    console.log("Lunch Break");
}
else if (time>=2 && time<5){
    console.log("Second coding time");
}
else if (time>=17 && time<18){
    console.log("Snack time+Break time")
}
else if (time>=18 && time<19){
    console.log("English Activity time")
}
else if (time>=19 && time<20){
    console.log("Recreation time")
}
else if (time>=20 && time<21){
    console.log("Dinner time");
}
else if (time>=21){
    console.log("Sleeping time");
}
else{
    console.log("Invalid time")
}
