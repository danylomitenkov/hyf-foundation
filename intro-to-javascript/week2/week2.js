// const age = 5;
// if (age >= 18) {
//   console.log("You can vote");
// } else {
//   console.log(`You can vote in ${18 - age} years`);
// }

// const randomNumber = 2;
// if (randomNumber % 2 === 0 && randomNumber !== 0) {
//   console.log(`${randomNumber} is even`);
// } else if (randomNumber % 2 !== 0) {
//   console.log(`${randomNumber} is odd`);
// } else if (randomNumber === 0) {
//   console.log(`${randomNumber} is zero`);
// }

// const balance = 3001;
// if (balance <= 0) {
//   console.log("Please deposit some money!");
// } else if (balance <= 1000) {
//   console.log("Your balance is looking okay");
// } else if (balance <= 3000) {
//   console.log("Your balance is looking good");
// } else if (balance <= 10000) {
//   console.log("Your balance is fantastic");
// } else {
//   console.log("Your balance is AMAZING!");
// }

// const items = 1;
// const label = items === 1 ? "item" : "items";
// console.log("You have " + items + " " + label);
// console.log(`You have ${items} ${label}`);

// const studentAge = 65;
// const day = "Tuesday";
// console.log(
//   `${studentAge < 12 ? "free" : studentAge < 18 || studentAge >= 65 ? `Price is ${day === "Tuesday" ? "35" : "60"} kr` : `Price is ${day === "Tuesday" ? "60" : "120"} kr`}`,
// );

// const firstName = "Danylo";
// const firstCityName = "Næstved";

// function introduce(firstName = "Alex", cityName = "Copenhagen") {
//   console.log(`Hi, I'm ${firstName} from ${cityName}`);
// }

// introduce();
// introduce(firstName, firstCityName);
// introduce("Maria", "Slagelse");
// introduce("Ivan", "Dnipro");

// const number = 45;

// function logSquare(number) {
//   return number * number;
// }

// console.log(logSquare(number));

function getVat(price) {
  return price * 0.25;
}

function getPriceWithVat(price) {
  return price + getVat(price);
}

function getShippingCost(total) {
  return total >= 500 ? 0 : 49;
}

function getFinalPrice(price) {
  return getPriceWithVat(price) + getShippingCost(getPriceWithVat(price));
}

console.log(getFinalPrice(100));
console.log(getFinalPrice(400));

// function logString(stringToLog, numberOfTimesToLog) {
//   for (let count = 0; count < numberOfTimesToLog; count++) {
//     console.log(`${stringToLog}`, count);
//   }
// }

// logString("HYF", 3);

// for (let i = 0; i < 101; i++) {
//   i >= 74 && i <= 98 ? console.log(i) : null;
// }

// for (let i = 10; i >= 0; i--) {
//   i > 0 ? console.log(i) : console.log("Liftoff! 🚀");
// }

// for (let i = 0; i <= 20; i++) {
//   !(i % 2) ? console.log(i) : null;
// }

const recipients =
  "benjamin@gmail.com|peter@gmail.com|hans@gmail.com|ahmad@gmail.com|sana@gmail.com|virgeen@gmail.com|mohamed@gmail.com";
const recipientsLength = recipients.length;
// This function pretends to send an email
function sendEmailTo(recipient) {
  for (let i = 0; i <= recipientsLength; i++) {
    console.log("email sent to " + recipient);
  }
}

sendEmailTo(recipients);
