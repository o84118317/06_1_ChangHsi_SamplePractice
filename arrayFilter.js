/*
  let results = arr.filter(function(item, index.array) {
	should return true if the item passes the filter
  });
*/
// This synax is roughly the same as find, but it returns an array of matching elements 


let users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Pete'},
  {id: 3, name: 'Mary'}
];

let someUsers = users.filter(item => item.id < 3);
// returns array of the first two users

alert(someUsers.length);// 2 