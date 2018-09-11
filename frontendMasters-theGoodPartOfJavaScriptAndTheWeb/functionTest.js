function swap(a,b) {
	let temp = a;
	a = b;
	b = temp;
}

let x = 1, y =2;
swap(x,y);
console.log(x);
// 1
// what if ...


function swap(a,b) {
	let temp = a;
	a = b;
	b = temp;
	return a, b;
}

let x = 1, y =2;
swap(x,y);
console.log(x);
//still 1
//and what if ...

function swap(a,b) {
	let temp = a;
	a = b;
	b = temp;
}

let x = 1, y =2;
console.log( swap(x,y) );
// undefined
// chose number 3 

function swap(a,b) {
	let temp = a;
	a = b;
	b = temp;
	console.log(a,b);
}

let x = 1, y =2;
swap(x,y);
