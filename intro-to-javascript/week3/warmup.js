// _________________________________________________________________
// Item array removal

const names = [
  "Peter",
  "Yana",
  "kristina",
  "Ahmad",
  "Rasmus",
  "Samuel",
  "Katrine",
  "Tala",
];
const nameToRemove = "Ahmad";

// Write some code here
for (let i = 0; i < names.length; i++) {
  if (nameToRemove === names[i]) {
    names.splice(i, 1);
    break;
  }
}
// Code done

console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']
// _________________________________________________________________;
// When will we be there??

const travelInformation = {
  speed: 50,
  destinationDistance: 432,
};
function specifyTravelInformation({ speed, destinationDistance }) {
  const hours = Math.floor(destinationDistance / speed);
  const minutes = Math.round((destinationDistance / speed - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}
const travelTime = specifyTravelInformation(travelInformation);
console.log(travelTime);
// _________________________________________________________________;
// Series duration of my life

const averageAge = 80;
const seriesDurations = [
  {
    title: "My hero academia",
    days: 2,
    hours: 20,
    minutes: 0,
  },
  {
    title: "Dr. stone",
    days: 1,
    hours: 13,
    minutes: 36,
  },
  {
    title: "Sword art online",
    days: 1,
    hours: 14,
    minutes: 24,
  },
  {
    title: "Attack on titan",
    days: 1,
    hours: 10,
    minutes: 48,
  },
];

function logOutSeriesText() {
  const averageAgeInMinutes = averageAge * 365 * 24 * 60; //42048000
  let totalSeriesInMinutes = 0;
  for (const serie of seriesDurations) {
    totalSeriesInMinutes +=
      serie.days * 24 * 60 + serie.hours * 60 + serie.minutes;
    console.log(
      `${serie.title} took ${(((serie.days * 24 * 60 + serie.hours * 60 + serie.minutes) / averageAgeInMinutes) * 100).toFixed(3) + "%"} of my life`,
    );
  }
  console.log(
    `\nIn total that is ${((totalSeriesInMinutes / averageAgeInMinutes) * 100).toFixed(3) + "%"} of my life`,
  );
}

logOutSeriesText();
