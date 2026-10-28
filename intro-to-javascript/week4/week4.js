// //Values from a form. Write down every // ? first. Then run it.

// const username = "nora_92";
// const age = "27"; // form inputs are always strings
// const basket = ["milk", "bread", 3, true];

// console.log(typeof age); // ? string
// console.log(age + 1); // ? 271
// console.log(age * 1 + 1); // ? 28 not 271
// console.log(age === 27); // ? false
// console.log(username[0]); // ? n
// console.log(username.length > 8); // ? false
// console.log(basket[4]); // ? undefined
// console.log(17 % 6); // ? 17 eggs, boxes of 6 — leftovers

// let shopName = "Corner Café";
// const prices = [35, 42, 28];

// shopName = "Corner Coffee";
// const itemCount = prices.length;
// const total = prices[0] + prices[1] + prices[2];
// const vat = total * 0.25;

// console.log(shopName + ": " + itemCount + " items");
// console.log("Total: " + total + " kr");
// console.log("VAT: " + vat + " kr");

// const drink = "Flat white";
// const price = 42;
// const quantity = 55;
// const isTakeaway = true;
// const cupFee = 3; // per cup, takeaway only

// const totalPrice = isTakeaway
//   ? `New order: ${quantity} * ${drink} \(takeaway\)\nTotal: ${quantity > 10 ? (price + cupFee) * ((quantity - (quantity % 10)) / 10) : (price + cupFee) * quantity} kr`
//   : `New order: ${quantity} * ${drink}\nTotal: ${(price + cupFee) * quantity} kr`;
// console.log(totalPrice);
// function calculateTotalPrice() {
//   const totalPrice = (price + cupFee) * quantity;
//   if (isTakeaway) {
//     console.log();
//     console.log(`Total: ${totalPrice} kr`);
//   } else {
//     console.log(`New order: ${quantity} * ${drink}`);
//     console.log(`Total: ${totalPrice} kr`);
//   }
// }
// calculateTotalPrice();
// New order: 3 × Flat white (takeaway)
// Total: 135 kr

// function logDiscount(price) {
//   console.log(price * 0.8);
// }
// function getDiscount(price) {
//   return price * 0.8;
//   console.log("Discount added");
// }

// const a = logDiscount(100); // ? 80
// const b = getDiscount(100); // ? 80
// console.log(a); // ? undefined
// console.log(b); // ? 80
// console.log(getDiscount(50) + 10); // ?45
// console.log(logDiscount(50) + 10); // ? undefined

// function getShipping(total, isMember = false) {
//   if (isMember) {
//     return 0;
//   } else if (total >= 500) {
//     return 0;
//   } else {
//     return 49;
//   }
// }

// function getOrderTotal(basket, isMember) {
//   const shipping = getShipping(basket, isMember);
//   console.log("Total: " + (basket + shipping));
// }

// getOrderTotal(300, true); // want: Total: 349
// getOrderTotal(650, false); // want: Total: 650
// getOrderTotal(300); // want: Total: 349
// getOrderTotal(650); // want: Total: 650

// function getDeliveryFee(orderTotal, distanceKm, isMember, hour) {
//   if (isMember || orderTotal > 300) {
//     return 0;
//   } else if (distanceKm > 5) {
//     if (hour > 17 && hour < 19.59) {
//       return 30 + 29;
//     }
//     return 20 + 29;
//   } else {
//     return 29;
//   }
// }

// console.log(getDeliveryFee(250, 3, false, 12)); // 29

// console.log(getDeliveryFee(250, 8, false, 18)); // 59
// console.log(getDeliveryFee(150, 8, true, 18)); // 0
// console.log(getDeliveryFee(320, 2, false, 18)); // 0
// 5;

// function getProgressBar(percent) {
//   const totalSign = Math.floor(percent / 10);
//   let finalMessage = [];
//   for (let count = 0; count < totalSign; count++) {
//     finalMessage = [...finalMessage, `#`];
//     console.log(finalMessage);
//     if (count === totalSign) {
//       for (const a = 0; a < 10 - count; a++) {
//         finalMessage = [...finalMessage, `-`];
//       }
//     }
//   }
//   return finalMessage;
// }

// console.log(getProgressBar(0));
// // [----------] 0%
// console.log(getProgressBar(30));
// // [###-------] 30%
// console.log(getProgressBar(75));
// // [#######---] 75%
// console.log(getProgressBar(100));
// // [##########] 100%

// let visitors = 0;
// function openShop() {
//   visitors = visitors + 1;
//   const message = "Welcome, visitor " + visitors;
//   console.log(message);
// }
// function closeShop() {
//   if (visitors > 0) {
//     const goodbye = "Bye, " + visitors + " visitors!";
//     console.log(goodbye);
//   }
// }
// openShop();
// openShop();
// // console.log(message);
// closeShop();

// const playlist = [
//   { title: "Levitating", artist: "Dua Lipa", seconds: 203 },
//   { title: "Yellow", artist: "Coldplay", seconds: 266 },
//   { title: "Flowers", artist: "Miley Cyrus", seconds: 200 },
//   { title: "Houdini", artist: "Dua Lipa", seconds: 185 },
// ];

// function formatTime(seconds) {
//   return `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}`;
// }
// function getTotalTime(playlist) {
//   let totalTime = 0;
//   for (const song of playlist) {
//     totalTime += song.seconds;
//   }
//   return `${Math.floor(totalTime / 60)}:${totalTime % 60}`;
// }
// function getSongsBy(playlist, artist) {
//   let artistList = ``;
//   for (const song of playlist) {
//     if (artist === song.artist) {
//       artistList += `${song.title} — ${song.artist} (${formatTime(song.seconds)}))\n`;
//     }
//   }
//   return artistList;
// }

// console.log(formatTime(playlist[0].seconds));
// console.log(formatTime(playlist[3].seconds));
// console.log(getTotalTime(playlist));
// console.log(getSongsBy(playlist, "Dua Lipa"));
// console.log(getSongsBy(playlist, "Coldplay"));

const openingHours = {
  monday: { open: 8, close: 17 },
  tuesday: { open: 8, close: 17 },
  thursday: { open: 8, close: 17 },
  friday: { open: 8, close: 20 },
  saturday: { open: 10, close: 14 },
  sunday: null,
};

function isOpen(day, hour) {
  const convertedDay = day.toLowerCase();
  return (
    convertedDay != "sunday" &&
    hour > openingHours[convertedDay].open &&
    hour < openingHours[convertedDay].close
  );
}
function getOpeningText(day) {
  const convertedDay = day.toLowerCase();
  return convertedDay != "sunday"
    ? `${convertedDay}: ${openingHours[convertedDay].open}-${openingHours[convertedDay].close}`
    : "sunday: closed";
}

console.log(isOpen("friday", 19)); // true

console.log(isOpen("saturday", 15)); // false

console.log(isOpen("sunday", 12)); // false
console.log(isOpen("Monday", 9));
console.log(getOpeningText("friday"));
console.log(getOpeningText("Monday"));

console.log(getOpeningText("sunday"));
console.log(getOpeningText("SUNDAY"));

const transactions = [
  { name: "Salary", amount: 21000, category: "income" },
  { name: "Rent", amount: -7500, category: "housing" },
  { name: "Netto", amount: -412, category: "food" },
  { name: "Rejsekort", amount: -300, category: "transport" },
  { name: "Pizza", amount: -189, category: "food" },
  { name: "Netflix", amount: -129, category: "fun" },
];
function getBalance(transactions) {
  let totalBalance = 0;
  for (let transaction of transactions) {
    totalBalance += transaction.amount;
  }
  return totalBalance;
}
function getBiggestExpense(transactions) {
  let biggestExpense = 0;
  for (let transaction of transactions) {
    biggestExpense > transaction.amount
      ? (biggestExpense = transaction.amount)
      : biggestExpense;
  }
  return biggestExpense;
}
console.log(getBalance(transactions)); // 12470
console.log(getBiggestExpense(transactions));
// console.log(getSpendingByCategory(transactions));
// { housing: 7500, food: 601,
//   transport: 300, fun: 129 }
