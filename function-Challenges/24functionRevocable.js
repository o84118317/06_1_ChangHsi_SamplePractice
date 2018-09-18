/*
Make a revocable function that
takes a binary function, and returns
an object containing an invoke
function that can invoke the binary
function, and a revoke function that 
disables the invoke function.

let rev = revocable(add),
	add_rev = rev.invoke

add_rev(3, 4); //7
rev.revoke();
add_rev(5, 7); //12 
*/