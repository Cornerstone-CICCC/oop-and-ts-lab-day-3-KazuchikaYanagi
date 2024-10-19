// Create a function called insertAfterTarget that inserts a new element after a target element
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function insertAfterTarget(target, newElement) {
  // your code here
  const tempStack = new Stack();
  let insertNum = (reverseNum = 0);
  // let reverseNum = 0;

  while (!stack.isEmpty()) {
    for (let i = 0; i < stack.size(); i++) {
      const temp = stack.pop();
      if (temp === target) insertNum = i;
      tempStack.push(temp);
      insertNum++;
    }
  }

  while (!tempStack.isEmpty()) {
    for (let i = 0; i < tempStack.size(); i++) {
      const temp = tempStack.pop();
      if (reverseNum === insertNum) stack.push(newElement);

      stack.push(temp);
      reverseNum++;
    }
  }
}

const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");
stack.push("D");

insertAfterTarget("B", "X");
console.log(stack.printStack()); // A B X C D
