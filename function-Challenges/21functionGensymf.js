/*
Make a function gensymf that
makes a function that
generates uniquw symbols.

let geng = gensymf('G');
let genh = gensymf('H');
geng() // 'G1'
genh() // 'H1'
geng() // 'G2'
genh() // 'H2'
*/

// my answer
function gensymf(symbols) {
	return function () {
		let value =  gen();
		return (symbols + value);
	};
}


//  correct answer
function gensymf(prefix) {
	let number = 0;
	return function () {
		number += 1;
		return prefix + number;
	};
}