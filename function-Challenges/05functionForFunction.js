/*
Write a function liftf that
takes a binary function, and 
makes it callable with two
invocations.

let addf = liftf(add);
addf(3)(4) // 7
liftf(mul)(5)(6) //30

*/

function liftf(x){
	if ( x == 'add') {
		return function (first) {
			return function (second){
				return first + second;
			};
		};
	} else if (x == 'mul') {
		return function (first) {
			return function(second) {
				return first * second; 
			};
		};
	}
}

let addf = liftf(add);
addf(3)(4) // 7
liftf(mul)(5)(6) //30


// solution
// combine with previous practices
function add(a,b) {
	return a + b;
}

function sub(a,b) {
	return a - b;
}

function mul(a,b) {
	return a * b;
}

function liftf(binary) {
	return function (first) {
		return function (second) {
			return binary(first,second);
		};
	};
}
let addf = liftf(add);
addf(3)(4) // 7
liftf(mul)(5)(6) //30