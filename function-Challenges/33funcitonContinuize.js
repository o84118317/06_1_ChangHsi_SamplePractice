/*
Make a function continuize
that takes a unary function,
and returns a function that
takes a callback and an argument.

sqrtc = continuize(Math.sqrt);
sqrtc(alert, 81) //9
*/


//  my answer
function continuize(unary) {
	return function (callback, argument) {
		callback( unary(argument) );
	};
}

// correct answer
function continuize(unary) {
	return function (callback, argument) {
		return callback( unary(argument) );
	};
}