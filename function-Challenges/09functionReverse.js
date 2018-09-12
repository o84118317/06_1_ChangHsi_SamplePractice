/*
Write reverse, a function
that reverses the argument of
a binary function

let bus = reverse(sub);
bus(3,2) // -1
*/


function reverse(binary) {
	return function (first, second) {
		return binary(second, first);
	};
}

// able to reverse any number of arguments
function reverse(func) {
	return function (...args) {
		return func(...args.reverse());
	}
}