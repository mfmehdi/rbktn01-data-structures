var Stack = function() {
  
  var someInstance = {};
	someInstance.storage = {}
 
	extend(someInstance,stackMethods)

  return someInstance
};


var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

 var stackMethods = {};

 stackMethods.push = function(value) {
    this.storage[this.size()]=value;
  };

  stackMethods.pop = function() {
  	if (Object.keys(this.storage).length !== 0) {
  		var deletedItem=this.storage[this.size()-1]
    delete this.storage[this.size()-1];
    return deletedItem;

  	}
    
  };

   stackMethods.size = function() {
    return Object.keys(this.storage).length;
};