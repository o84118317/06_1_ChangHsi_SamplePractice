/*
Write a function identifyf 
that takes an argument and 
returns a function that returns
that argument

let three == identityf(3);
three(3);  -> 3 
*/

function identityf(x) {
	return function (){
		return x
	}
}

let three = identityf(3);
three();