// Create a function called mixQueue that rearranges the queue so that the first half is interleaved/mixed with the second half
// For example: 1 2 3 4 5 6 becomes 1 4 2 5 3 6
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function mixQueue(queue) {
  // your code here
  const smlQueue = new Queue();
  const lrgQueue = new Queue();

  while (!queue.isEmpty()) {
    for (let i = 0; i <= queue.size() / 2; i++) {
      smlQueue.enqueue(queue.dequeue());
    }
    // console.log("smlQueue: ", smlQueue);
    // console.log(queue.size());
    for (let j = 0; (j = queue.size()); j++) {
      lrgQueue.enqueue(queue.dequeue());
    }
    // console.log("lrgQueue: ", lrgQueue);
  }

  while (!smlQueue.isEmpty() && !lrgQueue.isEmpty()) {
    queue.enqueue(smlQueue.dequeue());
    queue.enqueue(lrgQueue.dequeue());
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);

mixQueue(queue);
console.log(queue.printQueue()); // Output: 1 4 2 5 3 6
