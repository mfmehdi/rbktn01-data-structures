var Queue = function() {

var someInstance=Object.create(queueMethods)
someInstance.storage={};
return someInstance;
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