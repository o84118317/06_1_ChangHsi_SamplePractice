/*
Write a to function that takes
a generator and an end value,
and returns a generator that 
will produce numbers up to the limit.

let index = to( from(1), 3);
index() //1
index() //2
index() //undefined
*/

function to(start,end) {
	return function () {
		let value = start(); 
		if (value < end) {
			return value;	 
		};
	};
}