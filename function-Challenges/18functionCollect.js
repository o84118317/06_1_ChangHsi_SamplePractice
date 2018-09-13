/*
Write a collect function that takes 
a generator and an array and
produces a function that will collect
the results in the array.

let array = [], 
	col = collect( from(0,2), array);

col() // 0
col() // 1
col() // undefined
array // [0, 1]
*/



//  my answer
function collect(gen, array) {
	return function () {
		array.push( gen() );
		return gen()
	}
}

// correct answer 
function collect(gen, array) {
	return function () {
		let value = gen();
		if (value !== undefined) {
			array.push(value);
		}
		return value;
	};
}