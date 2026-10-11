// Age-ify (A future age calculator)
const yearOfBirth = 2003;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}`);

//_______________________________________________________________
// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2003;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = true; // Variable type: boolean

if (shouldShowResultInDogYears) {
  console.log(
    `Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`,
  );
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`,
  );
}

//_______________________________________________________________
// Housey pricey (A house price estimator)
const petersHouseWide = 8;
const petersHouseDeep = 10;
const petersHouseHigh = 10;
const petersGardenSize = 100;
const petersHousePrice = 2500000;

const firstHousePrice =
  petersHouseWide * petersHouseDeep * petersHouseHigh * 2.5 * 1000 +
  petersGardenSize * 300;

console.log(petersHousePrice, firstHousePrice);

const juliaHouseWide = 5;
const juliaHouseDeep = 11;
const juliaHouseHigh = 8;
const juliaGardenSize = 70;
const juliaHousePrice = 1000000;

const secondHousePrice =
  juliaHouseWide * juliaHouseDeep * juliaHouseHigh * 2.5 * 1000 +
  juliaGardenSize * 300;

console.log(juliaHousePrice, secondHousePrice);

if (petersHousePrice > firstHousePrice) {
  console.log(
    `Peter is paying too much. He pays ${petersHousePrice}, but the house is worth ${firstHousePrice}`,
  );
} else {
  console.log(`Peter is paying too little (good deal)!`);
}

if (juliaHousePrice > secondHousePrice) {
  console.log(`Julia is paying too much!`);
} else {
  console.log(
    `Julia is paying too little (good deal)! She pays ${juliaHousePrice}, but the house is worth ${secondHousePrice}`,
  );
}

//_______________________________________________________________
// Ez Namey (Startup name generator)
const firstWords = [
  "Easy",
  "Bright",
  "Happy",
  "Quick",
  "Clever",
  "Fresh",
  "Amazing",
  "Friendly",
  "Super",
  "Magic",
];

const secondWords = [
  "Company",
  "Ideas",
  "Solutions",
  "Systems",
  "Studio",
  "Works",
  "Technology",
  "Creations",
  "Partners",
  "Labs",
];

const startupName =
  `${firstWords[Math.floor(Math.random() * 10)]}` +
  " " +
  `${secondWords[Math.floor(Math.random() * 10)]}`;

console.log(
  `The startup: '${startupName}' contains ${startupName.length} characters`,
);
