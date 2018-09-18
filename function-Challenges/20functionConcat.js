/*
Write a concat function that takes
two generators and prodeces a 
generator that combines the 
sequences.

let con = concat (fromTo(0,3), fromTo(0,2));
con() //0
con() //1
con() //2
con() //0
con() //1
con() //undefined
*/


//  my answer
function concat(gen1, gen2) {
	return function () {
		let value1 = gen1();
		if ( value1 !== undefined) {
			return value1;
		} 
		let value2 = gen2();
		return value2;
	}
}

//  correcct answer

function concat(gen1, gen2) {
	let gen = gen1();
	return function () {
		let value = gen();
		if (value !== undefined) {
			return value;
		}
		gen = gen2;
		return gen();
	}
}