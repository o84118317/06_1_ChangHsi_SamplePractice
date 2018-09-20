/*
Write a function liftg that
will take a binary function and 
apply it to many invocations.

liftg(mul)() //undefined
liftg(mul)(3)() //3
liftg(mul)(3)(0)(4)() //0
liftg(mul)(1)(2)(4)(8)() // 64

*/
// my answer
function lifftg(binary) {
	return function (first) {
		
		if (first !== undefined) {
			return more;
		}

		function more (next) {
			if (next === undefined) {
				return first;
			}
			binary(first, next);
			return more;
		}

	};
}

//  correct answer
function liftg(binary) {
	return function (first) {
		
		if (first === undefined) {
			return first;
		}

		return function more(next) {
			if (next === undefined) {
				return first;
			}
			first += bunary(first, second);
			retunr more;
		};
	};
}