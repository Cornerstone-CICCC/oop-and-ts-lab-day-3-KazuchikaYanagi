// Create a function called deleteAllNodesWithValue that removes all nodes with a specific value from the DLL
// Make sure to update the size of the list as well

const DLL = require("../lib/DLL");

function deleteAllNodesWithValue(list, value) {
  // your code here
  let currentNode = list.getHead();

  while (currentNode) {
    let nextNode = currentNode.next;

    if (currentNode.data === value) {
      if (currentNode.prev) {
        currentNode.prev.next = currentNode.next;
      } else {
        list.setHead(currentNode.next);
      }

      if (currentNode.next) {
        currentNode.next.prev = currentNode.prev;
      } else {
        list.setTail(currentNode.prev);
      }

      list.setSize(list.length() - 1);
    }

    currentNode = nextNode;
  }
}

const list = new DLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(2);
list.insertAtBack(5);

deleteAllNodesWithValue(list, 2);
console.log(list.print()); // Output: 1 <-> 3 <-> 5
