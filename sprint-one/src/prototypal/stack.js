var Stack = function() {

var someInstance = Object.create(stackMethods)

 someInstance.storage = {};

return someInstance

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

