// Create a function called removeBetween that removes all elements between two unique elements
// Make sure to implement the Stack principle (LIFO)

const Stack = require("../lib/Stack");

function removeBetween(a, b) {
  // your code here
  const tempStack = new Stack();
  const rmArr = [];

  while (!fruits.isEmpty()) {
    const el = fruits.pop();
    tempStack.push(el);
    if (el === a) break;
  }

  while (!tempStack.isEmpty()) {
    const el = tempStack.pop();
    if (el === a || el === b) {
      fruits.push(el);
    } else {
      rmArr.push(el);
    }
  }

  return fruits;
}

const fruits = new Stack();
fruits.push("Apple");
fruits.push("Banana");
fruits.push("Cherry");
fruits.push("Date");
fruits.push("Elderberry");

removeBetween("Banana", "Elderberry");
console.log(fruits.printStack()); // Apple Banana Elderberry
