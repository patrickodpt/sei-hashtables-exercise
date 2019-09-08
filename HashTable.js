class Node {
  constructor(key, value) {
    // should have a property called "data" that stores key and value in an array: [key, value]
    // should have a reference to the next node called "next", initialized to null
    this.data = [key, value]
    this.next = null
  }
  get key() {
    // return the actual key from the data property
    return this.data[0]
  }
  get value() {
    // return the actual value from the data property
    return this.data[1]
  }
}

// note: this is a simpler LinkedList class than in the Linked List lesson
class LinkedList {
  constructor(){
    // initialize a "head" property to null
    this.head = null
  }
  add(key, value){
    // create a new Node with the given data as its data property
    // if this list's head is null make that node the head,
    // otherwise add it to end of the list

    const newNode = new Node(key, value);
    if(!this.head){
        this.head = newNode;
    }else{
        let walker = this.head;
        while(walker.next){
            if(walker.key === key){
                walker.data[1] = value;
                return;
            }
            walker = walker.next;
        }
        if(walker.key === key){
            walker.data[1] = value;
        }else{
            walker.next = newNode;
        }
    }

    // MY CODE:::::
    // let addNode = new Node(key, value)
    //
    // function helperAdd() {
    //   let walker = this.head
    //   let follower;
    //
    //   while (walker) {
    //     follower = walker
    //     walker = walker.next
    //   }
    //   walker = addNode
    //   return walker
    // }
    //
    // !this.head ? this.head = addNode : helperAdd();

  }
  search(key){
    // searches the list for a given key
    // if it is found, return it
    // if not, return false

    console.log(`key: ${key}`);
    if(!this.head) {return false}

    let walker = this.head; //initialize walker

    while (walker) { //while a node is present
      if (walker.key === key) { //is key found
        return walker
      }
      walker = walker.next;
    }
    
    return false

  }
  delete(key){
    // search the list for a node whose data has a key that matches the key parameter
    // remove it from the list and return it
    // if no such node exists, return false
    let foundNode = this.search(key)
    let walker;

    if (!foundNode) {
      return foundNode
    } else if (foundNode === this.head) {
      this.head = foundNode.next
      foundNode.next = null
      return foundNode
    } else {
      walker = this.head
      while (walker.next != foundNode) {
        walker = walker.next
      }
      walker.next = foundNode.next
      foundNode.next = null
      return foundNode
    }
  }
}

class HashTable {
  constructor(size) {
    // initialize table size - prime number size is recommended to avoid clustering
    // intialize the table to have "size" number of elements, set to null
    // the table will be an array named "table"

    this.table = Array(size);
  }

  hash(key) {
    // calculate and return an integer value based key, like in the lesson
    // remember, if you are using modulus, it is recommended to use a prime number to avoid clustering

    return key.length % this.table.length
  }

  insert(key, value) {
    // hash the key to get an integer index
    let intIndex = this.hash(key)

    if (!this.table[intIndex]) {
      let newList = new LinkedList()
      this.table[intIndex] = newList
    }

    this.table[intIndex].add(key, value);
  }

  delete(key) {
    // lookup the key (i.e. hash it to get an index)
    // if the key is, in fact, in the linked list, delete that Node and return it
    // if the key wasn't found return -1

    // let intIndex = this.hash(key)
    // if(this.table[intIndex] != null) {
    //   let foundAndDeleted = this.table[intIndex].delete(key)
    //   if (!foundAndDeleted) {
    //     return -1
    //   } else {
    //     return foundAndDeleted
    //   }
    // }

    const index = this.hash(key);
    if(this.table[index] !== null){
        const deleted = this.table[index].delete(key);
        if(!deleted){
            return -1;
        }else{
            return deleted;
        }
    }
    return -1;

  }

  search(key) {
    // hash key to get index
    // search the linked list at the index
    // if the key is found, return the Node
    // if not, return -1
  }

}


module.exports = {
  Node,
  LinkedList,
  HashTable
}
