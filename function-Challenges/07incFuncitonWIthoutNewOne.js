/*
Without writing any new 
functions, show three ways to
create the inc function.

let inc = _ _ _;
inc(5) //6
inc(inc(5)) //7
*/

// answer 1
let inc = addf(1);
// answer 2
let inc = liftf(add)(1);
// answer 3
let inc = curry(add, 1);
