// const student = {
//   name: "John",
//   age: 32,
//   pet: null,
//   subject: ["javascript", "React", "node"],
//   car: {
//     color: "red",
//   },
// };

// student.address = "Troensevej";
// student.car = null;
// console.log(student);

// ////////

// const students = [
//   {
//     car: "red",
//   },
// ];

// console.log(
//   students.includes({
//     car: "red",
//   }),
// );

/*
Task 1: My Pet :dog:
Topic: Objects — creating, updating, and deleting properties.

You just got a new pet! Let’s create an object to store information about it.

Instructions:

1. Create an object called pet with three properties:.
◦ name: “Buddy”.
◦ type: “dog”.
◦ age: 2.
2. Print the pet’s name to the console..
3. Buddy just had a birthday! Update the age to 3..
4. Add a new property called color with the value “brown”..
5. Delete the type property..
6. Print the entire object to the console..

Expected final result:

{
  name: "Buddy",
  age: 3,
  color: "brown"
}
*/
// const pet = {
//   name: "Buddy",
//   type: "dog",
//   age: 2,
// };

// console.log(pet.name);
// pet.age = 3;
// pet.color = "brown";
// delete pet.type;
// console.log(pet);

/*
Task 2: Shopping List :shopping_trolley:
Topic: Arrays — iterating from first to last.

You’re going grocery shopping and want to print your shopping list.
Starter code:

const shoppingList = ["Milk", "Bread", "Eggs", "Apples", "Cheese"];

Instructions:

1. Use a for loop to go through the array from first to last..
2. Print each item with its position number (starting from 1)..
3. After the loop, print the total number of items..

Expected output:

1. Milk
2. Bread
3. Eggs
4. Apples
5. Cheese
Total items: 5
Bonus: Print “Don’t forget the eggs!” when you encounter “Eggs”.
*/
// const shoppingList = ["Milk", "Bread", "Eggs", "Apples", "Cheese"];
// for (let i = 0; i < shoppingList.length; i++) {
//   console.log(`${i + 1}. ${shoppingList[i]}`);
// }
// console.log(`Total items: ${shoppingList.length}`);
//
/*
Task 3: Countdown to Launch :rocket:
Topic: Arrays — iterating from last to first.

You’re preparing a rocket for launch! The countdown numbers are stored in an array, but they’re in the wrong order.

Starter code:

const countdown = [1, 2, 3, 4, 5];
Instructions:

1. Use a for loop to go through the array from last to first..
2. Print each number to the console..
3. After the loop, print “:rocket: Blast off!”..

Expected output:

5
4
3
2
1
🚀 Blast off!
Bonus: Make sure your code works with any length of the countdown array.
*/
// const countdown = [1, 2, 3, 4, 5];
// for (const countdown1 of countdown.reverse()) {
//   console.log(countdown1);
// }
// console.log("🚀 Blast off!");
/*
Task 4: Student Grades :mortar_board:
Topic: Arrays of objects — iterating and modifying objects.

You’re helping a teacher manage student information. Each student has a name and a test score.

Starter code:

const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 42 },
  { name: "Charlie", score: 73 },
  { name: "Diana", score: 95 },
  { name: "Eve", score: 38 }
];

Instructions:

1. Use a for loop to go through all students..
2. Add a new property called passed to each student..
3. Set passed to true if their score is 50 or higher, otherwise false..
4. Print each student’s name and whether they passed..
5. Print the updated students array..

Expected final result:

[
  { name: "Alice", score: 85, passed: true },
  { name: "Bob", score: 42, passed: false },
  { name: "Charlie", score: 73, passed: true },
  { name: "Diana", score: 95, passed: true },
  { name: "Eve", score: 38, passed: false }
]
Bonus: Count how many students passed and print the result.*/
const students = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 42 },
  { name: "Charlie", score: 73 },
  { name: "Diana", score: 95 },
  { name: "Eve", score: 38 },
];

for (const student of students) {
  if (student.score >= 50) {
    student.passed = true;
    console.log(student.name, student.passed);
  } else {
    student.passed = false;
  }
}
console.log(students);

const whosOnline = (friends) => {
  const newObj = {
    online: [],
    offline: [],
    away: [],
  };

  for (const friend of friends) {
    if (friend.status === "online" && friend.lastActivity > 10) {
      newObj.away.push(friend.username);
    } else if (friend.status === "offline") {
      newObj.offline.push(friend.username);
    } else if (friend.status === "online") {
      newObj.online.push(friend.username);
    }
  }
  if (newObj.online.length === 0) {
    delete newObj.online;
  }
  if (newObj.offline.length === 0) {
    delete newObj.offline;
  }
  if (newObj.away.length === 0) {
    delete newObj.away;
  }
  return newObj;
};

const arr = [
  {
    username: "David",
    status: "online",
    lastActivity: 9,
  },
  {
    username: "Lucy",
    status: "offline",
    lastActivity: 22,
  },
  {
    username: "Bob",
    status: "online",
    lastActivity: 104,
  },
  {
    username: "John",
    status: "online",
    lastActivity: 100,
  },
];
const whosOnline = (friends) => {
  const status = {};

  for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    let currentState;

    if (element.status === "offline") {
      currentState = "offline";
    } else if (element.status === "online" && element.lastActivity > 10) {
      currentState = "away";
    } else {
      currentState = "online";
    }

    if (!status[currentState]) {
      status[currentState] = [];
    }
    status[currentState].push(element.username);
  }

  return status;
};
console.log(whosOnline(arr));
