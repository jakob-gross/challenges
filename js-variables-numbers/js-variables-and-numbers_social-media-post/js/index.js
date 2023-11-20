console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const title = "Headline: javascript is fun";
const text = "new research found out that javascript is fun in 2023";
let like = [9999];
const user = "Jakob Gross";
const isReported = false;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("title:", title);
console.log("textof title:", text);
console.log(`Likes: ${like}`);
console.log(`Users: ${user}`);
console.log(`isReported: ${isReported}`);
like = like[0] + 1; //
console.log(`Likes: ${like}`);

// --^-- write your code here --^--
