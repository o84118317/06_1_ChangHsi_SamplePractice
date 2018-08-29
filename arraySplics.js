// deletion

let arr = ['I', 'study', 'JavaScript'];
arr.splice(1,1); // from index 1 remove 1 element
alert( arr ); //['I', 'JavaScript']



// remove 3 elements and replace them by the other two

let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
arr.splice( 0, 3, 'Let\'s','dance');// remove 3 first elements and replace them by another 
alert( arr ); // now['let's', 'dance', 'right', 'now']




// splice returns the array of removed elements

let arr = ['I', 'study', 'JavaScript', 'right', 'now'];
let removed = arr.splice(0, 2); // remove 2 first elements and store in removed
alert ( removed ); // 'I',' study' -> array od removed elements



// splice insert elements without any removal. We need to set deleteCount to 0

let arr = ['I', 'study', 'JavaScript'];
arr.splice(2,0,'complex','language');
// from index 2 
// delete 0
// then insert 'complex' and 'language'
alert (arr); // 'I', 'study','complex', 'language', 'JavaScript'