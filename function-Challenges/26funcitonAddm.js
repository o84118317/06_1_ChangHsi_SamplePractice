/*
Write a function addm that
takes two m objects and 
return an m object.

JSON.stringify( addm(m(3), m(4)) )
// {'value': 7, 'source': '(3+4)'}
JSON.stringify( addmm(m(1), m(Math.PI, 'pi')))
// {'value':4,14159..., 'source': (1+pi)}

*/

// my answer
function addm (m1, m2) {
	return {
		value: (m1.vlaue + m2.value),
		source: (m1.source + m2.source) 
	};
}

// correct answer
function addm(m1, m2) {
	return m(
			m1.value + m2.value,
			'('+ m1.source + '+' + 
			m2.source + ')'
		);
}