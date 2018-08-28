function User(name) {
	if (!new.target) { // if you run me without
		return new User(name); // ... I will add new for you 
	}

	this.name = name;
}

let jonh = User('John'); // redirects call to new User
alert (john.name); // John 
...