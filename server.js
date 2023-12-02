const fs = require("fs");

const prompt = require("prompt-sync")();

let storage = fs.readFileSync("db.json");
let users = JSON.parse(storage);

while (true) {
  let selection = prompt("Select an option: ");
  selection = parseInt(selection); // Convert the input to a number

  if (selection === 1) {
    createUser();
  } else if (selection === 2) {
    readUser();
  } else if (selection === 3) {
    updateUser();
  } else if (selection === 4) {
    deleteUser();
  } else if (selection === 5) {
    printAllUsers();
  } else if (selection === 6) {
    exit();
    break; // Add break to exit the loop after calling exit function
  }
}

// Create User
function createUser() {
  let id = prompt("Enter user ID: ");
  let name = prompt("Enter user name: ");
  let age = prompt("Enter user age: ");
  let city = prompt("Enter user city: ");

  users[id] = {
    name,
    age,
    city,
  };
  let dataToString = JSON.stringify(users);
  console.log("User added successfully");
  fs.writeFileSync("db.json", dataToString);
}

// Updates the user
function updateUser() {
  let id = prompt("Enter user ID to update: ");
  let name = prompt("Enter updated name: ");
  let age = prompt("Enter updated age: ");
  let city = prompt("Enter updated city: ");

  if (users[id]) {
    users[id] = {
      name,
      age,
      city,
    };
    let dataToString = JSON.stringify(users);
    fs.writeFileSync("db.json", dataToString);
    console.log("User updated successfully");
  } else {
    console.log("Invalid user!");
  }
}

// Returns the user based on the ID
function readUser() {
  let id = prompt("Enter user ID to read: ");
  let user = users[id];
  if (user) {
    console.log(user);
  } else {
    console.log("User not found!");
  }
}

// Deletes the user
function deleteUser() {
  let id = prompt("Enter user ID to delete: ");
  if (users[id]) {
    delete users[id];
    let dataToString = JSON.stringify(users);
    console.log("User deleted successfully");
    fs.writeFileSync("db.json", dataToString);
  } else {
    console.log("Invalid user!");
  }
}

function printAllUsers() {
  console.log(users);
}

// Exit the program
function exit() {
  console.log("Exiting the program.");
}
