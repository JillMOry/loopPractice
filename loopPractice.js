"use strict";
// Use a do...while loop to console.log the numbers from 1 to 1000.
// Create an object (an array with keys and values) called person with the following data:

var text = "";
var i = 0;
do {
	text += "The number is " + i;
	i++;
} while (i < 5);

let text = "";
let i = 0;

do {
	i;
	console.log(i);
	i++;
} while (i < 1001);
// //-----------------------------------------

const person = {
	firstName: "Jane",
	lastName: "Doe",
	birthDate: "Jan 5, 1925",
	gender: "female"
};

// // Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
// // for (const property in object)
// can use parseInt instead of Number.  was getting 4 console.logs because of having a semicolon after the ) of my if statement no-no!.
for (const key in person) {
	if (key === "birthDate") {
		// slicing off the 1925 from the birthDate
		let year = Number(person["birthDate"].slice(7, 11));
		// perform the modulus operation to evaluate if the birthDate is even or odd
		if (year % 2 !== 0) {
			console.log(person["birthDate"]);
		}
	}
}

//-----------------------------------------------------

const arrayOfPersons = [
	{
		firstName: "Jane",
		lastName: "Doe",
		birthDate: "Jan 5, 1925",
		gender: "female"
	},
	{
		firstName: "Mark",
		lastName: "Smith",
		birthDate: "Mar 30, 1940",
		gender: "male"
	},
	{
		firstName: "Steve",
		lastName: "Klemm",
		birthDate: "Aug 10, 1980",
		gender: "male"
	},
	{
		firstName: "Tina",
		lastName: "Hill",
		birthDate: "Nov 12, 1971",
		gender: "female"
	},
	{
		firstName: "Taylor",
		lastName: "Jones",
		birthDate: "Sep 9, 1989",
		gender: "undefined"
	}
];

// Use .map() to map over the arrayOfPersons and console.log() their information.
const personInfo = arrayOfPersons.map((map) => {
	return `personal information  ${map.firstName} ${map.lastName}: ${map.birthDate}, gender is ${map.gender}`;
});
console.log(personInfo);

// Use .filter() to filter the persons array and console.log only males in the array.
const isMale = arrayOfPersons.filter((male) => {
	return male.gender == "male";
});
console.log(isMale);

// //--------------------------------------------------------------------

// Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.

// loops through the birthdates and slices off the birth year and evaulates if less than 1990; Boolean true/false.
// becaue the "<" is more of a comparison and not an operation like modulus we do not need to convert the yearOfBirth (drove me nuts!).
const bornBefore = arrayOfPersons.filter(
	(yearOfBirth) => yearOfBirth["birthDate"].slice(7, 11) < "1990"
);

console.log(bornBefore);
