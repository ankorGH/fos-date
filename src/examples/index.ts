import fos from "../lib/index";

// get today date value at midnight
const today = fos().value;
console.log(today);

// add today date value at 04:00:00
let todayAt4 = fos(4).value;
console.log(todayAt4);

// get date of 2 days after today midnight
let twoDaysToToday = fos().add("2d").value;
console.log(twoDaysToToday);

// get date of 2 days before today midnight
let twoDaysAfterToday = fos().add("-2d").value;
console.log(twoDaysAfterToday);

let rangeFromTodayToNextFiveDays = fos().range("0", "5d").value;
console.log(rangeFromTodayToNextFiveDays);

let rangeFromFiveDaysAgoTillDate = fos().range("5d", "0").value;
console.log(rangeFromFiveDaysAgoTillDate);

let rangeFromFivedaysAgoToNextFiveDays = fos().range("5d", "5d").value;
console.log(rangeFromFivedaysAgoToNextFiveDays);
