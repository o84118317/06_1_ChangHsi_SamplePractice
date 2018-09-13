/*
Write an element function that
takes an array and a generator and
returns a generrator that will produce
elements fromt the array.

lt ele = element([
	'a', 'b', 'c', 'd'
], fromTo(1,3));
ele() // 'b'
ele() // 'c'
ele() // undefined
*/

// my answer
function element(name, number) {
	return function () {
		return name[number];
	};
}

// correct answer
function element(array, gen) {
	return function () {
		let index = gen();
		if (index !== undefined) {
			return array(index);
		}
	};
}