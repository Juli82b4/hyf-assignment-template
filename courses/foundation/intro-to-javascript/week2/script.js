
//..................Flight booking fullname fucntion

function getFullName(firstName, lastName, useFormalName = false) {

    if (!firstName && !lastName)
        return "No name provided";

    return useFormalName ?
        `Lord ${firstName} ${lastName}` : `${firstName} ${lastName}`;
}

const fullName1 = getFullName("Carina", "Hygge", true)
const fullName2 = getFullName("Julie", "John")

console.log(fullName1)
console.log(fullName2)



//.....................Event application

function getEventWeekday(daysFromToday) {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const eventday = (today + daysFromToday) % 7;
    return weekdays[eventday];
}

console.log(getEventWeekday(5));
console.log(getEventWeekday(2));




//......................Weather wear

function whatToWear(temperature) {
    if (temperature > 25) {
        return `The temperature is above ${temperature}°C, recommended clothes are t-shirt and shorts`;
    } else if (temperature >= 15 && temperature <= 25) {
        return `The temperature is ${temperature}°C, its between 15-25 so recommended cloth is thin jacket`;
    } else if (temperature <= 10) {
        return `The temperature is ${temperature}°C, its below 10 °C, wear a winter jacket`
    }

    return `The temperature is ${temperature}°C`
}

const clothesToWear = whatToWear(30)
console.log(clothesToWear)




//---------------------Student manager

const class07Students = [];
function addStudentToClass(studentName) {
    if (class07Students.length < 7 && !class07Students.includes(studentName)) {
        class07Students.push(studentName)
    } else if
        (class07Students.includes(studentName)) {
        console.log(`Student ${studentName} has been already added`);

    } else if (studentName === "Queen") {
        class07Students.push(studentName)
        console.log("Queen should be added even if the class is filled out more than 7")
    } else {
        console.log("Cannot add more students to the class 07")
    }

}

function getNumberOfStudents() {
    return class07Students.length
}

addStudentToClass("John")
addStudentToClass("Juli")
addStudentToClass("Niel")
addStudentToClass("Ahamed")
addStudentToClass("Laura")
addStudentToClass("Angela")
addStudentToClass("Mette")
addStudentToClass("John")
addStudentToClass("Queen")

console.log(getNumberOfStudents());




//........................Candy helper optional

const boughtCandyPrices = [];

function addCandy(candyType, weight) {
    let pricePerGram;

    switch (candyType) {
        case "sweet":
            pricePerGram = 0.5;
            break;

        case "chocolate":
            pricePerGram = 0.7;
            break;

        case "toffee":
            pricePerGram = 1.1;
            break;

        case "chewing-gum":
            pricePerGram = 0.03;
            break;

        default:
            pricePerGram = 0;
            break;
    }

    const price = weight * pricePerGram;
    boughtCandyPrices.push(price);
    console.log(price)
}

let amountToSpend = Math.random() * 100;
console.log(amountToSpend)

function canBuyMoreCandy() {
    let total = 0;

    for (let i = 0; i < boughtCandyPrices.length; i++) {
        total += boughtCandyPrices[i];
    }

    return total < amountToSpend;
}

addCandy("sweet", 20);
addCandy("chocolate", 30);
addCandy("chewing-gum", 100);

if (canBuyMoreCandy()) {
    console.log("You can buy more, so please do!");
} else {
    console.log("Enough candy for you");
}
