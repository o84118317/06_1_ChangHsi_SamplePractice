/*
Write a filter function that takes a 
generator and a predicate and 
produces a generator that produces 
only the values approve by the prodicate.

let fil = filter(fromTo(0,5), 
	function third(value) {
		return (value % 3) === 0 ;
	});

fil() // 0
fil() // 3
fil() //undefined
*/

//  my answer
function filter(gen, pre) {
	return function () {
		let value = gen();
		if ( pre(value) ) {
			return value;
		};
	};
}

// correct answer
function filter(gen, predicate) {
	return function recur() {
		let value = gen();
		if ( 
			predicate(value) 
			|| value === undefined
		) {
			return value;
		}
		return recur();
	};
}