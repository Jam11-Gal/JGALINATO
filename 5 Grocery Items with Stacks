let groceryStack = [];

function peek() {
  if (groceryStack.length === 0) {
    return "Stack is empty";
  } else {
    return groceryStack[groceryStack.length - 1];
  }
}

function push(item) {
  groceryStack.push(item);
  console.log("Stack after push:", groceryStack);
}

function pop() {
  if (groceryStack.length === 0) {
    console.log("Stack is empty. Cannot pop.");
  } else {
    let poppedItem = groceryStack.pop();
    console.log("Popped item:", poppedItem);
    console.log("Stack after pop:", groceryStack);
  }
}


for (let i = 0; i < 5; i++) {
  let item = ("Banana, Milk, Eggs, Bread, Cheese" + (i + 1) + ":");
  push(item);
}
