/*
Modify function liftm so that
the functions it produces can
accept arguments that are
either numbers or m objects.

let addm = liftm(add, '+');
JSON.stringify( addm(3, 4))
// {'value': 7, 'source'; '(3 + 4)'}

*/

// my answer
function liftm(binary, op) {
	return function(a,b) {
		if (typeof a && b === 'object') {
			return m(
				binary(a.vlaue, b.value),
				'(' + a.source + op + b.source + ')'
				);
		}
		return m(
				binary(a,b),
				'(' + a+ op + b + ')'
			);
	};
}


// correct answer
function liftm(binary, op) {
	return function(a,b) {



		if (typeof a === 'number') {
			a = m(a);
		}
		if (typeof b === 'number') {
			b = m(b);
		}




		return m(
				binary(a.value, b.value),
				'(' + a.source + op + b.source + ')'
			);
	};
}