/*
Write a function twice that 
takes a binary function and 
returns a unary function that 
passes its argument to the 
binary function twice.

add(11,11) // 22
let doubl = twice(add);
doubl(11) // 22
let square = twice(mul);
square(11) // 121
*/


function twice(binary) {
	return function (argument) {
		return binary(argument, argument);
	};
}