/*
Write a fromTo function that
produces a generator that will
produce values values in a range.

let index = fromTo(0 , 3);
index(); // 0
index(); // 1
index(); // 2
index(); // undefined
*/


// my answer
function fromTo(start, end) {
	return	function () {
		if (start < end) {
			return start;
			start += 1;
		}
	};
}

//correct answer
function fromTo(start,end) {
	return function () {
		return to( from(start), end);
	};
}