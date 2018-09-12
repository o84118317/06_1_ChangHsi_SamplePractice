/*
Write a limit function that 
allows a binary function to be 
called a limited number of times.

let add_ltd =limit(add, 1);
add_ltd(3, 4); //7
add_ltd(3, 5); // undefined

*/


// my answer
function limit(binary,timer) {
	let setTime = timer;
	timer -= 1;
	return function (a, b) {
		if (setTime) {
		return binary(a, b);
		};
	};
}

// correct answer

function limit(binary, count) {
	return function (a, b) {
		if (count >= 1) {
			count -= 1;
			return binary(a, b);
		}
		return undefined;
	};
}