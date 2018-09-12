/*

Write a function composeu
that takes two unary functions 
and returns a unary function
that calls them both.

composeu(doubl, square)(5) // 100

*/


function composeu(one, two) {
	return function (argument) {
		return two ( one(argument) ); 
	};
}
