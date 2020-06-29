## ❗❗❗ Highly Experimental ❗❗❗

NB: This project started as a way to a solve personal need. Check out [date-fns](https://date-fns.org/) for your production usage.

# ⚡ fos ⚡

A lightweight utility library for date manipulation.

## Table Content

- [Introduction](#fos)
- [Installation](##installation)
- [Getting Started](#getting-started)
- [API](#api)
  - [add](#add)
  - [subtract](#subtract)
  - [range](#range)

## Installation

```bash
npm install fos-date

yarn add fos-date
```

## Getting Started

```js
const fos = require("fos-date");

const nextFiveDaysFromToday = fos().add("5d");
```

## API

### add

Accepts a time string in this [format](#format). Returns date with current date and time added.

```js
// next two days from now

let nextTwoDays = fos().add("2d");
console.log(nextTwoDays);
```

### subtract

Accepts a time string in this [format](#format). Returns date with time subtracted from current date.

```js
// get date of 2 days ago today midnight
let twoDaysAgo = fos().subtract("2d");
console.log(twoDaysAgo);
```

### range

Accepts a time string in this [format](#format). Returns lowerBound and upperBound of range specified.

```js
// get range from five days ago to current day
let rangeFromFiveDaysAgoTillDate = fos().range("5d", "0");
console.log(rangeFromFiveDaysAgoTillDate);
```

## Format

fos under the hood uses [ms](https://www.npmjs.com/package/ms). It takes a number and particular day in time. Below are some examples to guide you.

```js
// 1 years
// 2 year
// 2 yrs
// 2 yr
// 2 y

// 1 weeks
// 1 week
// 1 w

// 2 days
// 2 day
// 2 d

// 1 hours
// 1 hour
// 1 hrs
// 1 hr
// 1 h

// 1 minutes
// 1 minute
// 2 mins
// 2 min
// 2 m

// 1 seconds
// 2 second
// 2 secs
// 2 sec
// 2 s

// 1 milliseconds
// 2 millisecond
// 2 msecs
// 2 msec
// 2 ms
```
