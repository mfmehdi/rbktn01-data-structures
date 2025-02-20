

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var obj={}
  var actualVal = this._storage.get(index)
  	 if ( actualVal === undefined ) {
  	 	 obj[k]=v
            this._storage.set(index,obj)

		}else{ 
				actualVal[k]=v;
				this._storage.set(index,actualVal);
		}

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k]
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var actualVal = this._storage.get(index)
  delete actualVal[k];
 this._storage.set(index,actualVal)
};



/*
 * Complexity: What is the time complexity of the above functions?

 */


