/*
Write a function exp that
evaluates simple array
expressions

let sae = [mul, 5, 11]
exp(sae) // 55
exp(42) // 42

*/


// my answer
function exp(array) {
	if (typeof array === 'number') {
		return array;
	}

	// i don't know how to do QQ
}


// correct answer
function exp(value) {
	return (Array.isarray(value))
		? value[0](value[1], value[2])
		: vlaue;
}