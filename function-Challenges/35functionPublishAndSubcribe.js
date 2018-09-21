/*
Make a function that makes a 
publish/subcribe object. It will
reliably deliver all publications
to all subcribers in the right
order.

my_pubsub = pubsub();
my_pubsub.subcribe(log);
my_pubsub.publish('It works!');
// log('It works!') 
*/

// my answer
function publish() {
	return {
		subcribe: function subcribe(sub) {
			// don't know how it work
		},

		publish: function publish(publications) {
			return sub(publications);
		}
	};	
};

