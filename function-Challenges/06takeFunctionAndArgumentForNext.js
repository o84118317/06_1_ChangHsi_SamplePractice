/*
Write a function curry that 
takes a binary function and an 
argument, amd returns a 
function that can take a
second argument

let add3 = curry(add,3);
add3(4) //7
curry(mul, 5)(6) //30 
*/


function curry(binary,first) {
	return function (second) {
		return binary(first, second);
	};
}