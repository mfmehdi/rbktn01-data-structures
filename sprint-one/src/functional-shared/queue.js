

var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  someInstance.storage = {};

  // Implement the methods below

  extend(someInstance, queueMethods );

  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};
var queueMethods = {};

queueMethods.enqueue = function(value) {
  	this.storage[Object.keys(this.storage)[this.size()-1]+1]=value;
  };

  queueMethods.dequeue = function() {
	var deletedItem =this.storage[[Object.keys(this.storage)[0]]]
  	delete this.storage[Object.keys(this.storage)[0]]
  	return  deletedItem ;
  };

  queueMethods.size = function() {
  	return Object.keys(this.storage).length;
  };