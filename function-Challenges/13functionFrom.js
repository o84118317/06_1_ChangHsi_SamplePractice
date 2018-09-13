/* 
 Write a from function that
 produces a generator that will
 produce a series of values

 let index = from(0);

 index(); //0
 index(); //1
 index(); //2
*/

// my answer
function from(x) {
	return	function () {
		return x;
		x += 1;
	}
}

// right answer
function from(start) {
	return function () {
		let next = start;
		start += 1;
		return next;
	};
}