var BinarySearchTree = function(value) {
	this.left=null;
	this.right=null;
	this.value=value;

};
//inserting node inside tree
BinarySearchTree.prototype.insert =function(value) {
	if(value > this.value){
		if (this.right !== null ) {
			this.right.insert(value)
		}else {
			this.right= new BinarySearchTree(value)
		}
	}else if(value < this.value){

		if (this.left !== null ) {
			this.left.insert(value)
		}else {
			this.left= new BinarySearchTree(value)
		}	
	}
}

BinarySearchTree.prototype.contains =function(value) {
var result = false;
	if ( this.value === value) {
		return true;
	}else {
		if ( value > this.value && this.right ) {
			 result = this.right.contains(value) || result 
			
		}else if (value < this.value && this.left) {	
			 result = this.left.contains(value) || result 
		
		}

	}
	return result
}

BinarySearchTree.prototype.depthFirstLog = function (callback) {
	callback(this.value);
	if(this.left){
		this.left.depthFirstLog(callback)
	}
	if(this.right){
		this.right.depthFirstLog(callback)
	}
}
/*
 * Complexity: What is the time complexity of the above functions?
 */
