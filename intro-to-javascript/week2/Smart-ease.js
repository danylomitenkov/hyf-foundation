function getFullName(firstName, surname, useFormalName, gender) {
  if (!firstName || !surname) {
    return "Please provide both first name and surname.";
  } else if (useFormalName && gender === "man") {
    return `Lord ${firstName} ${surname}`;
  } else if (useFormalName && gender === "woman") {
    return `Miss ${firstName} ${surname}`;
  } else {
    return `${firstName} ${surname}`;
  }
}

const fullName1 = getFullName("Danylo", "Mitenkov", true, "man");
const fullName2 = getFullName("Ivan", "Venikov", false);
const fullName3 = getFullName("Hila", "Bylmina", true, "woman");
const fullName4 = getFullName("Gabriela", "Ninja", false);

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);
console.log(fullName4);

function getEventWeekday(daysFromToday) {
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const todayIndex = new Date().getDay();
  const eventDayIndex = (todayIndex + daysFromToday) % 7;
  return weekdays[eventDayIndex];
}

console.log(getEventWeekday(5));
console.log(getEventWeekday(1));

function getWearRecommendation(temperature) {
  if (temperature < 0) {
    return "Warm jacket and a lot of socks";
  } else if (temperature <= 5) {
    return "Warm hoodie";
  } else if (temperature <= 15) {
    return "Thick t-shirt";
  } else {
    return "shorts and a t-shirt";
  }
}

const clothesToWear1 = getWearRecommendation(-15);
const clothesToWear2 = getWearRecommendation(5);
const clothesToWear3 = getWearRecommendation(15);
const clothesToWear4 = getWearRecommendation(25);
console.log(clothesToWear1);
console.log(clothesToWear2);
console.log(clothesToWear3);
console.log(clothesToWear4);

const class07Students = [];
function addStudentToClass(studentName) {
  // You write code here
  if (
    class07Students.length < 6 &&
    !class07Students.includes(studentName) &&
    studentName !== ""
  ) {
    class07Students.push(studentName);
  } else if (studentName === "Queen") {
    class07Students.push(studentName);
  } else {
    console.log(
      `Cannot add more students to class 07 or ${studentName} is already in the class`,
    );
  }
}
addStudentToClass("Danylo");
console.log(class07Students);
addStudentToClass("Ivan");
console.log(class07Students);
addStudentToClass("Mazut");
console.log(class07Students);
addStudentToClass("Oleg");
console.log(class07Students);
addStudentToClass("Vacheslav");
console.log(class07Students);
addStudentToClass("Askold");
console.log(class07Students);
addStudentToClass("Venecia");
console.log(class07Students);
addStudentToClass("Queen");
console.log(class07Students);
addStudentToClass("Oleg");
console.log(class07Students);

function getNumberOfStudents() {
  // You write code here
  return class07Students.length;
}
console.log(`Total students: ${getNumberOfStudents()}`);

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
  let pricePerGram = 0;
  const type = candyType.toLowerCase();

  if (type === "sweet") {
    pricePerGram = 0.5;
  } else if (type === "chocolate") {
    pricePerGram = 0.7;
  } else if (type === "toffee") {
    pricePerGram = 1.1;
  } else if (type === "chewing-gum") {
    pricePerGram = 0.03;
  } else {
    console.log(`Unknown candy type: ${candyType}`);
    return;
  }

  const candyPrice = weight * pricePerGram;
  boughtCandyPrices.push(candyPrice);
}

const amountToSpend = Math.random() * 100;
console.log(`Money to spend: ${amountToSpend.toFixed(2)} kr`);

function canBuyMoreCandy() {
  let totalPrice = 0;

  for (let i = 0; i < boughtCandyPrices.length; i++) {
    totalPrice += boughtCandyPrices[i];
  }

  console.log(`Total spent on candy: ${totalPrice} kr`);
  return totalPrice < amountToSpend;
}

// Покупаем конфеты:
addCandy("sweet", 20); // 20 * 0.5 = 10 kr
addCandy("chocolate", 30); // 30 * 0.7 = 21 kr
addCandy("toffee", 10); // 10 * 1.1 = 11 kr

// Проверяем:
if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}
