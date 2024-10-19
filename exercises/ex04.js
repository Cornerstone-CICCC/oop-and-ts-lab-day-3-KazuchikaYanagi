// Create a function called isPalindrome that checks if the elements in the queue form a palindrome
// A palindrome reads the same forwards and backwards (e.g., 1 2 3 2 1)
// Make sure to implement the Queue principle (FIFO)

const Queue = require("../lib/Queue");

function isPalindrome(queue) {
  // your code here
  const tempQueue = new Queue();
  let jdgNum;
  if (queue.size() % 2 === 0) jdgNum = queue.size() / 2;
  else jdgNum = Math.floor(queue.size() / 2);

  while (!queue.isEmpty()) {
    for (let i = 0; i < queue.size(); i++) {
      const temp = queue.dequeue();
      if (temp === queue.items[`${queue.size() - (i + 1)}`])
        tempQueue.enqueue(temp);
    }
  }

  return jdgNum === tempQueue.size() ? true : false;
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(2);
queue.enqueue(1);

console.log(isPalindrome(queue)); // true
