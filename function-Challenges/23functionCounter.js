/*
Write a counter function that
returns an object containing two
functions that implement and up/down
counter, hiding the counter.

let object = counter(10),
	up = object.up,
	down = object.down;

up() // 11
down() // 10
down() // 9
up() // 10
*/


//  my answer
function counter(initial) {
	return object {
		up: initial +1,
		down: initial -1;
	};
}

// correct answer
function counter(value) {
	return {
		up: function () {
			value += 1;
			return vlaue;
		},
		down: function () {
			value -= 1;
			return value
		}
	};
}