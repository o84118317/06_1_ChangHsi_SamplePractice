/*
Write a function composeb
that takes two binary functions
and return a function that
calls them both

composeb(add, mul) (2, 3, 7)  // 35

*/

function composeb(one, two) {
	return function (a, b, c) {
		//WRONG! return one(a, b)two(c);
		// the correct answer is
		return	two( one(a, b), c);
	};
}