// Age-ify
let yearBirth = 1989;
let futureYear = 2040;
let age = futureYear - yearBirth;

console.log(`You will be ${age} years old in ${futureYear}`);

// Goodboy-Oldboy
let dogYearOfBirth = 2025;
let dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    console.log(`Your dog will be ${dogYear * 7} dog years old in ${dogYearFuture}`)
} else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`)
}

//Housey pricey (A house price estimator)
let juliyaHouse = (5 * 11 * 8) * 2.5 * 1000 + 70 * 300;
let peterHouse = (8 * 10 * 10) * 2.5 * 1000 + 100 * 300;

console.log(`Juliya's house price ${juliyaHouse}`);

console.log(`Peter's house price ${peterHouse}`);

if (juliyaHouse > peterHouse) {
    console.log(`Juliya's paying too much`);
} else {
    console.log(`Peter's paying too much`);
}

//Ez Namey (Startup name generator) Optional
const firstWords = [
    "Easy",
    "Awesome",
    "Corporate",
    "Smart",
    "Next",
    "Bright",
    "Quick",
    "Hyper",
    "Bold",
    "Ultra"
];

const secondWords = [
    "Solutions",
    "Tech",
    "Labs",
    "Systems",
    "Works",
    "Dynamics",
    "Ventures",
    "Hub",
    "Network",
    "Innovations"
];

let randomNumber = Math.floor(Math.random() * 10);
let startupName = firstWords[randomNumber] + " " + secondWords[randomNumber]

console.log(`The startup: ${startupName} contains ${startupName.length} characters`)