import { fos } from "../lib/index";

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

// get range from today to next five days
let rangeFromTodayToNextFiveDays = fos().range("0", "5d").value;
console.log(rangeFromTodayToNextFiveDays);

// get range from five days ago to current day
let rangeFromFiveDaysAgoTillDate = fos().range("5d", "0").value;
console.log(rangeFromFiveDaysAgoTillDate);

// get range from five days ago to next five days
let rangeFromFivedaysAgoToNextFiveDays = fos().range("5d", "5d").value;
console.log(rangeFromFivedaysAgoToNextFiveDays);
