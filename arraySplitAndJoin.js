// .split()
//string -> array

let names = 'Bilbo, Gandalf, Nazgul';
let arr = names.split(', ');

for (let name of arr){
	alert (`A message to ${name}.`); // a message to Bilbo (and other names)
}


// a limit on the array length

let arr = 'Bilbo, Gandalf, Nazgul, Sarauman'.split(', ', 2);
alert(arr); // Bilbo, Gandalf


// .join(str)
// does the reverse to split.

let arr = ['Bilbo', 'Gandal', 'Nazgul'];
let str = arr.join(';');
alert ( str ); // Bilbo;Gandalf;Nazgul 