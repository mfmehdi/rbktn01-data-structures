var Stack = function() {

 this.storage = {};

};



 Stack.prototype.push = function(value) {
    this.storage[this.size()]=value;
  };

   Stack.prototype.pop = function() {
  	if (Object.keys(this.storage).length !== 0) {
  		var deletedItem=this.storage[this.size()-1]
    delete this.storage[this.size()-1];
    return deletedItem;

  	}
    
  };

    Stack.prototype.size = function() {
    return Object.keys(this.storage).length;
};

