/*
Write a function addg that
adds from many invocations,
until it sees an empty
invocation,

addg() //undefined
addg(2)() // 2
addg(2)(7)() // 9
addg(3)(0)(4)() // 7
addg(1)(2)(4)(8)() //15
*/


// my answer
function addg(number) {
	if (numebr !== undefined) {
		return function next(last) {
			if (last !== undefined) {
				number += last;
				return next()
			}
			return number;
		};
	}
}

//  correct answer
function addg(first) {
	
	if ( first !== undefined) {
		return more;
	}

	function more(next) {
		if (next === undefined) {
			return first;
		}
		first += next;
		return more;
	}
}