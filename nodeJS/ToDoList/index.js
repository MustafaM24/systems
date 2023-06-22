
// to do list:
// declare function to make a to do list


// First Iteration

// function makeToDoList() {
//     // declare variable to store the to do list
//     let toDoList = [];
//     // take user input
//     let action = prompt("What do you want to do?");
//     let item = prompt("What is the item?");
//     // return the to do list
//     return toDoList;
// }

// function addToDoItem(toDoList, toDoItem) {
//     // add the to do item to the to do list
//     toDoList.push(toDoItem);
// }

// function removeToDoItem(toDoList, toDoItem) {
//     // find the index of the to do item 
//     const index = toDoList.indexOf(toDoItem);
//     // if the to do item is in the to do list
//     if (index > -1) {
//         // remove the to do item from the to do list
//         toDoList.splice(index, 1);
//     }
// }

// const toDoList = makeToDoList();
// console.log(toDoList);



// Second Iteration:

// const readline = require('readline');

// function makeToDoList() {
//   let toDoList = [];
//   return toDoList;
// }

// function addToDoItem(toDoList, toDoItem) {
//   toDoList.push(toDoItem);
// }

// function removeToDoItem(toDoList, toDoItem) {
//   const index = toDoList.indexOf(toDoItem);
//   if (index > -1) {
//     toDoList.splice(index, 1);
//   }
// }

// function displayToDoList(toDoList) {
//   console.log("To-Do List:");
//   if (toDoList.length === 0) {
//     console.log("No items in the list.");
//   } else {
//     toDoList.forEach((item, index) => {
//       console.log(`${index + 1}. ${item}`);
//     });
//   }
// }

// function manageToDoList() {
//   const toDoList = makeToDoList();
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

//   rl.question("What do you want to do? (add/remove/display/exit)", (action) => {
//     switch (action) {
//       case "add":
//         rl.question("Enter the item to add:", (itemToAdd) => {
//           addToDoItem(toDoList, itemToAdd);
//           manageToDoList();
//         });
//         break;
//       case "remove":
//         rl.question("Enter the item to remove:", (itemToRemove) => {
//           removeToDoItem(toDoList, itemToRemove);
//           manageToDoList();
//         });
//         break;
//       case "display":
//         displayToDoList(toDoList);
//         manageToDoList();
//         break;
//       case "exit":
//         console.log("Exiting the to-do list manager.");
//         rl.close();
//         break;
//       default:
//         console.log("Invalid action. Please try again.");
//         manageToDoList();
//     }
//   });
// }

// manageToDoList();



// Final Iteration:

const readline = require('readline');

function makeToDoList() {
  let toDoList = [];
  return toDoList;
}

function addToDoItem(toDoList, toDoItem) {
  toDoList.push(toDoItem);
}

function removeToDoItem(toDoList, toDoItem) {
  const index = toDoList.indexOf(toDoItem);
  if (index > -1) {
    toDoList.splice(index, 1);
  }
}

function displayToDoList(toDoList) {
  console.log("To-Do List:");
  if (toDoList.length === 0) {
    console.log("No items in the list.");
  } else {
    toDoList.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  }
}

function handleAddAction(toDoList, rl) {
  rl.question("Enter the item to add: ", (itemToAdd) => {
    addToDoItem(toDoList, itemToAdd);
    manageToDoList(toDoList, rl);
  });
}

function handleRemoveAction(toDoList, rl) {
  rl.question("Enter the item to remove: ", (itemToRemove) => {
    removeToDoItem(toDoList, itemToRemove);
    manageToDoList(toDoList, rl);
  });
}

function handleDisplayAction(toDoList, rl) {
  displayToDoList(toDoList);
  manageToDoList(toDoList, rl);
}

function manageToDoList(toDoList, rl) {
  rl.question("What do you want to do? (add/remove/display/exit) ", (action) => {
    switch (action) {
      case "add":
        handleAddAction(toDoList, rl);
        break;
      case "remove":
        handleRemoveAction(toDoList, rl);
        break;
      case "display":
        handleDisplayAction(toDoList, rl);
        break;
      case "exit":
        console.log("Exiting the to-do list manager.");
        rl.close();
        break;
      default:
        console.log("Invalid action. Please try again.");
        manageToDoList(toDoList, rl);
    }
  });
}

function startToDoListManager() {
  const toDoList = makeToDoList();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  manageToDoList(toDoList, rl);
}

startToDoListManager();
