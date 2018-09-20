/*
Write a function arrayg that
will build an array from many
invocations.

arrayg() //[]
arrayg(3)() // [3]
arrayg(3)(4)(5)() // [3, 4, 5]
*/


function arrayg(first) {
	if (first === undefined) {
		return array.push[undefined];
	}
	array.push[first];
	return arrayg;
}