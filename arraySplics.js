// deletion

let arr = ['I', 'study', 'JavaScript'];
arr.splice(1,1); // from index 1 remove 1 element
alert( arr ); //['I', 'JavaScript']

// remove 3 elements and replace them by the other two

let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
arr.splice( 0, 3, 'Let\'s','dance');
// remove 3 first elements and replace them by another 
alert( arr ); // now['let's', 'dance', 'right', 'now']