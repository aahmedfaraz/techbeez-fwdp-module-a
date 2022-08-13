const percentage = 90;
if (percentage >= 80) {
  console.log("Grade A");
} else if (percentage >= 70 && percentage < 80) {
  console.log("Grade B");
} else {
  console.log("Grade F");
}
// Grade A

let time = "morning";
switch (time) {
  case "morning":
    // morning statement
    console.log("Good Morning!");
    break;
  case "afternoon":
    // afternoon statement
    console.log("Good Afternoon!");
    break;
  case "evening":
    // evening statement
    console.log("Good Evening!");
    break;
  default:
    // by default case
    console.log("Invalid Input");
    break;
}
// Good Morning!
