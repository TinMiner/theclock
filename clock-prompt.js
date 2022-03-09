/************************************************** */
//
// Alan Beecroft
// Human Friendly Clock part two
// Pick a time using the keyboard arrow and enter keys
//
/************************************************** */


// NPM PACKAGE PROMPTS to select time & date if you wish
const prompts = require('prompts');

(async () => {
const response = await prompts({
	type: 'date',
	name: 'value',
	message: 'Pick a time using your cursor left, right, down, up and enter keys!',
	initial: new Date()
});

// set the date from the users entry
theDate =  response.value
//console.log(theDate)
let hour = theDate.getHours();
let minutes = theDate.getMinutes();
//console.log("Hours are:- " + hour)
//console.log("Minutes are:- " + minutes)

// Invoke the clock to call the human friendly output
clock(hour, minutes)

})();

const clock = (hour, minutes) => {
	if(hour == 1 || hour == 13) 
hour_text = "One"
if(hour == 1 && (minutes > 30) || hour == 13 && (minutes > 30)) 
  hour_text = "Two"

if(hour == 2 || hour == 14) 
	hour_text = "Two"
if(hour == 2 && (minutes > 30) || hour == 14 && (minutes > 30))
	hour_text = "Three"

if(hour == 3 || hour == 15) 
  hour_text = "Three"
if(hour == 3 && (minutes > 30) || hour === 15 && (minutes > 30))
	hour_text = "Four"

if(hour == 4 || hour == 16) 
	hour_text = "Four"
if(hour == 4 && (minutes > 30)|| hour == 16 && (minutes > 30))
	hour_text = "Five"

if(hour == 5 || hour == 17) 
  hour_text = "Five"
if(hour == 5 && (minutes > 30) || hour == 17 && (minutes > 30))
	hour_text = "Six"

if(hour == 6 || hour == 18) 
	hour_text = "Six"
if(hour == 6 && (minutes > 30) || hour == 18 && (minutes > 30))
	hour_text = "Seven"

if(hour == 7 || hour == 19) 
  hour_text = "Seven"
if(hour == 7  && (minutes > 30) || hour == 19 && (minutes > 30))
	hour_text = "Eight"

if(hour == 8 || hour == 20) 
	hour_text = "Eight"
if(hour == 8 && (minutes > 30) || hour == 20 && (minutes > 30))
	hour_text = "Nine"

if(hour == 9 || hour == 21) 
  hour_text = "Nine"
if(hour == 9 && (minutes > 30) || hour == 21 && (minutes > 30))
	hour_text = "Ten"

if(hour == 10 || hour == 22) 
	hour_text = "Ten"
if(hour == 10  && (minutes > 30) || hour == 22 && (minutes > 30))
	hour_text = "Eleven"

if(hour == 11 || hour == 23) 
  hour_text = "Eleven"
if(hour == 11 && (minutes > 30) || hour == 23 && (minutes > 30))
	hour_text = "Twelve"

if(hour == 12 || hour == 24) 
	hour_text = "Twelve"
if(hour == 12 && (minutes > 30) || hour == 24 && (minutes > 30))
	hour_text = "One" 

// a combination of an if conditional and swich block to get the correct minute text
if(minutes != 0 && minutes < 30)
	switch (minutes) {
		case 1 :
			console.log("One minute past " + hour_text)
			break
		case 2 :
			console.log("Two minutes past " + hour_text)
			break
		case 3 :
			console.log("Three minutes past " + hour_text)
			break
		case 4 :
			console.log("Four minutes past " + hour_text)
			break
		case 5 :
			console.log("five minutes past " + hour_text)
			break
		case 6 :
			console.log("Six minutes past " + hour_text)
			break
		case 7 :
			console.log("Seven minutes past " + hour_text)
			break
		case 8 :
			console.log("Eight minutes past " + hour_text)
			break
		case 9 :
			console.log("Nine minutes past " + hour_text)
			break
		case 10 :
			console.log("Ten minutes past " + hour_text)
			break
		case 11 :
			console.log("Eleven minutes past " + hour_text)
			break
		case 12 :
			console.log("Twelve minutes past " + hour_text)
			break
		case 13 :
			console.log("Thirteen minutes past " + hour_text)
			break
		case 14 :
			console.log("Fourteen minutes past " + hour_text)
			break
		case 15 :
			console.log("A quarter past " + hour_text)
			break
		case 24 :
			console.log("Twenty four minutes past " + hour_text)
			break
		case 25 :
			console.log("Twenty five minutes past " + hour_text)
			break
		case 26 :
		console.log("Twenty six minutes past " + hour_text)
		break
		case 27 :
			console.log("Twenty seven minutes past " + hour_text)
			break
		case 28 :
			console.log("Twenty eight minutes past " + hour_text)
			break
		case 29 :
		console.log("Twenty nine minutes past " + hour_text)
		break
	}

 if(minutes > 30)
  switch (minutes) {
		case 31 :
			console.log("Twenty nine minutes to " + hour_text)
			break
		case 32 :
			console.log("Twenty eight minutes to " + hour_text)
			break
		case 33 :
			console.log("Twenty seven minutes to " + hour_text)
			break
		case 34 :
			console.log("Twenty six minutes to " + hour_text)
			break
		case 35 :
			console.log("Twenty five minutes to " + hour_text)
			break
		case 35 :
			console.log("Twenty eight minutes to " + hour_text)
			break
		case 37 :
			console.log("Twenty three minutes to " + hour_text)
			break
		case 38 :
			console.log("Twenty two minutes to " + hour_text)
			break
		case 39 :
			console.log("Twenty one minutes to " + hour_text)
			break
		case 40 :
			console.log("Twenty minutes to " + hour_text)
			break
		case 41 :
			console.log("Nineteen minutes to " + hour_text)
			break
		case 42 :
			console.log("Eighteen minutes to " + hour_text)
		case 43 :
		console.log("Seventeen minutes to " + hour_text)
		break
		case 44 :
			console.log("Sixteen minutes to " + hour_text)
			break
		case 45 :
			console.log("A quarter to " + hour_text)
			break
		case 46 :
			console.log("Fourteen minutes to " + hour_text)
			break
		case 47 :
			console.log("Thirteen minutes to " + hour_text)
			break
		case 48 :
			console.log("Twelve minutes to " + hour_text)
			break
		case 49 :
			console.log("Eleven minutes to " + hour_text)
			break
		case 50 :
			console.log("Ten minutes to " + hour_text)
			break
		case 51 :
			console.log("Nine minutes to " + hour_text)
			break
		case 52 :
			console.log("Eight minutes to " + hour_text)
			break
		case 53 :
			console.log("Seven minutes to " + hour_text)
			break
		case 54 :
			console.log("Six minutes to " + hour_text)
			break
		case 55 :
			console.log("Five minutes to " + hour_text)
			break
		case 56 :
			console.log("Four minutes to " + hour_text)
			break
		case 57 :
			console.log("Three minutes to " + hour_text)
			break
		case 58 :
			console.log("Two minutes to " + hour_text)
			break
		case 59 :
			console.log("One minute to " + hour_text)
			break
	}

if(minutes == 30)
	console.log("Half past " + hour_text)

if (minutes == 00)
	console.log(hour_text + " o'clock")
}