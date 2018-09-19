/*
Write a function m that takes a
value and an optional source
string and returns them in an object.

JSON.stringify( m(1) );
// {'value': 1, 'source', '1'}
JSON.stringify( m(Math.PI, 'pi') )
// {'value': 3.14159..., 'source': 'pi'}
*/


function m(value, source) {
	return {
		value: value,
		source: (typeof source === 'string')
			? source
			: String(value)
	};
}