/*

Write a funciton addf that 
adds from two invocations

addf(3)(4) // 7

*/

function addf(first) { 
	return function (second) {
		return first + second;
	}
}

addf(3)(4);