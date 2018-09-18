/*
Make a functoin fibonnaccif 
that returns a generator that
will return the next fibonacci
number.

let fib = fibonacci(0, 1);
fib() //0
fib() //1
fib() //1
fib() //2
fib() //3
fib() //5
*/


//  my answer 
function fibonacci(first, second) {
	let number = 0;
	return function() {
		number += first;
		first = first + second;
		return number;
	};
}

// correct answer
function fibonacci(a,b) {
	return function() {
		let next = a;
		a = b;
		b += next;
		return next;
	};
}