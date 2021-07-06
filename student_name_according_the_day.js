const input=require('readline-sync');
var day=input.question("Enter the day: ");
if (day == "monday") {
  console.log("Reena\nSana\nDeepti\nAmrita\nShanti");
}
else if (day == "tuesday") {
  console.log("Anisha\nKabita\nDurga\nPriyanka\nAnjum");
}
else if (day == "wednesday") {
  console.log("Rani\nSabana\nSavita\nRohini\nSapna");
}
else if (day == "thursday") {
  console.log("Preeti\nShubhangi\nUjala\nKalpana\nKabita");
}
else if (day == "friday") {
  console.log("Reena\nAnkita\nNeha\nSanchi\nTulsi");
}
else if (day == "saturday") {
  console.log("Ishani\nRohi\nAradhya\nMithi\nRiddhi");
}
else if (day == "sunday") {
  console.log("Sakshi\nPreeti\nPriyanka\nSwati\nParveen");
}
else {
  console.log("Please enter valid week day")
}


