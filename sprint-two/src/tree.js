var Tree = function(value) {
	//console.log(value)
  var newTree = Object.create(treeMethods);
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

 return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(  Tree(value)) 
	
};

treeMethods.contains = function(target) {
	var result =false;
	if (this.value === target ) 
		{return true
		}else if(this.children){
			for (var i = 0; i < this.children.length; i++) {
				result=this.children[i].contains(target) || result
			}
		}

		return result
};


/*
 * Complexity: What is the time complexity of the above functions?
 */