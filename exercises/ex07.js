// Create a function called findMiddle that returns the middle node of a singly linked list
// Tip: Create two runners (one runner moves one node at a time, the other one moves two nodes at a time)

const SLL = require("../lib/SLL");

function findMiddle(list) {
  // your code here
  let len = list.length();
  let mdlIdx = Math.floor(len / 2);
  let runner = list.getHead();
  let curIdx = 0;

  while (curIdx < mdlIdx) {
    runner = runner.next;
    curIdx++;
  }

  return runner.data;
}

const list = new SLL();
list.insertAtBack(1);
console.log(list);
list.insertAtBack(2);
console.log(list);
list.insertAtBack(3);
console.log(list);
list.insertAtBack(4);
console.log(list);
list.insertAtBack(5);
console.log(list);

console.log(findMiddle(list)); // Output: 3
