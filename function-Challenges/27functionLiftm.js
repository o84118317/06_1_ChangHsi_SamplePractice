/*
Write a function liftm that
takes a binary function and a 
string and returns a function
that acts on m objects.

let addm =liftm(add, '+');
JSON.stringify( addm(m(3), m(4)))
//{'value': 7, 'source': '(3+4)'}
JSON.stringify(liftm(mul, '*')(m(3),
	m(4)))
//{'value': 12,, 'source': '(3*4)'}
*/



//  my answer
function liftm(binary, string) {
	return function addm (m1,m2) {
		return m (
				value: binary(m1.value, m2.value),
				source: '('+ m1.source + string + m2.source + ')'
			);
	};
}

//  correct answer
function liftm(binary, op) {
	return function(a,b) {
		return m(
				binary(a.value, b.value),
				'(' + a.source + op + b.source + ')'
			);
	};
}