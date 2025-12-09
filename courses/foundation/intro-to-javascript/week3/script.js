const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "kristina",
    "Rasmus",
    "Samuel",
    "Katrine",
    "Tala",

];
const nameToRemove = "Ahmad";

const index = names.indexOf(nameToRemove);
if (index) {
    names.splice(index, 1)
    console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']    
} else {
    console.log(`'${nameToRemove}' wasn't found in the names list!`)
}

//..................When will we be there??
function getTotalDuration(travelInformation) {
    const time = (travelInformation.destinationDistance / travelInformation.speed) * 60
    const hours = Math.floor(time / 60);
    const minutes = time % 60;

    return `${hours} hours and ${minutes.toFixed()} minutes`;
}
const travelInformation = {
    speed: 50,
    destinationDistance: 432,
};

const travelTime = getTotalDuration(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes



//..................Series duration of my life

const seriesDurations = [
    {
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Sopranos",
        days: 3,
        hours: 14,
        minutes: 0,
    },
    {
        title: "The Wire",
        days: 2,
        hours: 12,
        minutes: 0,
    },
];

const averageLifeSpan = 80;

function logOutSeriesText() {
    const lifeMinutes = averageLifeSpan * 365 * 24 * 60;
    let total = 0;

    for (let series of seriesDurations) {
        let minutes = series.days * 24 * 60 + series.hours * 60 + series.minutes;
        let percent = (minutes / lifeMinutes) * 100;
        total += percent;
        console.log(`${series.title} took ${percent.toFixed(3)}% of my life`);
    }

    console.log(`In total that is ${total.toFixed(3)}% of my life`);
}

logOutSeriesText();



//.................Note taking app


const notes = [];

function saveNote(content, id) {
    notes.push({ content, id })
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("Eat cake", 3);

function getNote(id) {
    if (id === undefined || typeof id !== "number") {
        console.log("Error : You must provide a valid numeric id")
        return;
    }

    for (const note of notes) {
        if (note.id === id) {
            return note;
        }
    }

    return "notes not found"
}

const firstNote = getNote(1);
console.log(firstNote);


//.........................Adding an activity

let activities = []

function addActivity(activity, duration) {
    const today = new Date();
    const date = today.toLocaleDateString();
    activities.push({ date, activity, duration })
}

function showStatus() {
    if (activities.length === 0) {
        return "Add some activities before calling showStatus"
    }

    const numberOfActivities = activities.length;

    let totalDuration = 0;

    for (let i = 0; i < activities.length; i++) {
        totalDuration += activities[i].duration
    }


    return `You have added ${numberOfActivities} activities. They amount to ${totalDuration} min. of usage`;
}

addActivity("Youtube", 30);
addActivity("TikTok", 40);
addActivity("Instagram", 50);

console.log(showStatus());  