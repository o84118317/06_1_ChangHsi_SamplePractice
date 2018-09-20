/*
Write a function arrayg that
will build an array from many
invocations.

arrayg() //[]
arrayg(3)() // [3]
arrayg(3)(4)(5)() // [3, 4, 5]
*/

//  my answer
function arrayg(first) {
	if (first === undefined) {
		return array.push[undefined];
	}
	array.push[first];
	return arrayg;
}

// correct answer
function liftg(first) {
	let array = [];
	function more(next) {
		if (next === undefined) {
			return array;
		}
		array.push(next);
		return more;
	}
	return more(first);
}