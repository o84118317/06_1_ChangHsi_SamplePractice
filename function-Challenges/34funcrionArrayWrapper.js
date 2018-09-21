/*
Make an array wrapper object
with methods get, store, and
append, such that an attacter
cannot get access to the
provate array.

myvector = vector();
myvector.append(7);
myvector.store(1,8);
myvector.get(0); // 7
myvector.get(1); // 8
*/

//  my answer
function vector() {
	let array = [];
	
	return {
		append: function(v) {
			array.push(v);
		},
		store: function(i, v) {
			array[i] = v;
		},
		get: function(i) {
			return array[i];
		}
	};;
}

