var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  	var newNode= Node(value)

  	if(list.head === null){
  	list.head=newNode;
  	
  	}else{
  		list.tail.next=newNode;    
 	}
 	list.tail=newNode;
  };

  list.removeHead = function() {
  	var removedHead=list.head;
  	list.head=removedHead.next;
  	return removedHead.value;
  };

  list.contains = function(target) {

  	if(list.tail.value===target || list.head.value===target) 
  		return true;
  	return search(list.head,target);

  };

var search=function(head,target){
if(head.value === target) return true
  	if(head.next === null) return false
  				
  		return search(head.next,target)

  		}

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
