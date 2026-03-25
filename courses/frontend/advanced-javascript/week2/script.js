// 2.Function
/*Display the text Called after 2.5 seconds on the page 2.5 seconds after the script is loaded.
Create a function that takes 2 parameters: delay and stringToLog. 
Calling this function should display the stringToLog on the page after delay seconds.
Call the function you have created with some different arguments. second task
Create a button in html. When clicking this button, use the function 
you created in the previous task to display the text Called after 5 seconds 
on the page 5 seconds after the button is clicked.*/

function displayDelay(delay, stringToLog) {
    setTimeout(() => {
        const p = document.createElement("p");
        p.textContent = stringToLog;
        document.getElementById("task1Output").appendChild(p);
    }, delay * 1000);
}


displayDelay(2.5, "Called after 2.5 seconds");

document.getElementById("btn").addEventListener("click", () => {
    displayDelay(5, "Called after 5 seconds");
});


/* 1.4 Create two functions and assign them to two different variables. 
One function displays Earth on the page, the other displays Saturn.
Now create a new third function that has one parameter: planetLogFunction. 
The only thing the third function should do is call the provided parameter function.
Try calling the third function once with the Earth function and once with the Saturn function.*/

const earthLogger = function () {
    const p = document.createElement("p");
    p.textContent = "Earth";
    document.getElementById("task2Output").appendChild(p);
}

const saturnLogger = function () {
    const p = document.createElement("p");
    p.textContent = "Saturn";
    document.getElementById("task2Output").appendChild(p);
}

function planetLogFunction(planetCaller) {
    planetCaller();
}


document.getElementById("earthBtn").addEventListener("click", () => planetLogFunction(earthLogger));
document.getElementById("saturnBtn").addEventListener("click", () => planetLogFunction(saturnLogger));

/*1.5 Create a button with the text "Log location". When this button is clicked, 
display the user's location (latitude, longitude) 
on the page using this browser API.*/

document.getElementById("locationBtn").onclick = function () {
    navigator.geolocation.getCurrentPosition(function (myLocation) {
        console.log(myLocation)
        document.getElementById("output").textContent =
            "Latitude: " + myLocation.coords.latitude + ", Longitude: " + myLocation.coords.longitude;
    });
};

/* 1.7 Create a function called runAfterDelay. It has two parameters: delay and callback.
When called the function should wait delay seconds and then call the provided callback function.
Add an input in the HTML for the delay (in seconds) and a button; when the button is clicked, 
read the delay from the input and call runAfterDelay 
with that delay and a callback that displays something on the page.*/

function runAfterDelay(delay, callback) {
    setTimeout(callback, delay * 1000);
}

document.getElementById("runBtn").addEventListener("click", () => {

    const delay = Number(document.getElementById("delayInput").value);
    const output = document.getElementById("delayOutput");

    output.textContent = `Waiting for ${delay} sec`;

    runAfterDelay(delay, () => {
        output.textContent = `Messaged was display after ${delay} sec`;
    });


});

/*1.8 Check if the user has double-clicked on the page. 
A double click is two clicks within 0.5 seconds.
If a double click is detected, display the text "double click!" on the page.*/

let counter = 0;

document.addEventListener("click", () => {
    const output = document.getElementById("clickOutput")
    counter++;

    if (counter === 1) {
        setTimeout(() => {
            counter = 0
        }, 500)
    }

    else if (counter === 2) {
        output.textContent = "double click";
        counter = 0;

    }
});

/*1.9 Create a function called jokeCreator that has three parameters: shouldTellFunnyJoke (boolean),
logFunnyJoke (function), and logBadJoke (function).
If shouldTellFunnyJoke is true it should call logFunnyJoke, 
which displays a funny joke on the page. 
Otherwise it should call logBadJoke, which displays a bad joke on the page.*/

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {

    if (shouldTellFunnyJoke === true) {
        logFunnyJoke();
    } else {
        logBadJoke();
    }
}

/* 3- Create functions that are used in these different ways:
Create an array with 3 items. All items should be functions.
Iterate through the array and call all the functions.
Create a function as a const and try creating a function normally. 
Call both functions. 
You can read more about this in What is the difference between a function expression vs declaration in JavaScript?
Create an object that has a key whose value is a function. Try calling this function. */

const items = [task1, task2, task3];

function task1() {
    console.log("Task number one")
}
function task2() {
    console.log("Task number two")
}
function task3() {
    console.log("Task number three")
}
for (let i = 0; i < items.length; i++) {
    items[i]();
}

function normalFunction() {
    console.log("This is a normal function");
}
const constFunction = function () {
    console.log("This is a function expression assigned to const");
};

normalFunction();
constFunction();

/*4. The fastest presser in this realm
//On progress//
Here is the setup of the game: Two users compete about who can press a key the most times within a set time!
A user specifies how long time the game should be, and presses "start game!". When the button is pressed it is about pressing either l or s on the keyboard. The user that has the highest number of keypresses after the time is up, wins 🎉
Here is a gif of how the site should work:
![session material](session-materials/fastest-clicker.gif =400x)
You can implement it exactly like you want to, but here is my recommended order:
Create an input and a button in html. When the button is clicked, get the value of the input. 
This value will be the amount of time the game should run.
Set a timeout for the time specified by the user. After that time has run out, 
display a message on the page (e.g. "Time's up!").
Create an event listener so you can call a function when any key is pressed. 
Now grab the actual key that was pressed. e.g. was it a j or an i. 
We are interested in s and l. Here Google is your friend!
Keep a counter for how many times l and s was pressed.
Now put it all together! After the timeout is done figure 
out which of the counters is largest. Give some kind of feedback to the users indicating who won.*/

let s = 0;
let l = 0;
let playing = false;

document.getElementById("startButton").addEventListener("click", () => {
    let time = Number(document.getElementById("gameTime").value);

    if (!time || time <= 0) {
        alert("Please enter a valid time!");
        return;
    }

    s = 0;
    l = 0;
    playing = true;

    document.getElementById("sCount").innerText = 0;
    document.getElementById("lCount").innerText = 0;
    document.getElementById("message").innerText = "GO!";

    setTimeout(() => {
        playing = false;

        if (s > l) {
            document.getElementById("message").innerText = "S wins";
        } else if (l > s) {
            document.getElementById("message").innerText = "L wins";
        } else {
            document.getElementById("message").innerText = "It's a tie";
        }

    }, time * 1000);
});

document.addEventListener("keydown", function (e) {
    if (!playing) return;

    if (e.key.toLowerCase() === "s") {
        s++;
        document.getElementById("sCount").innerText = s;
    }

    if (e.key.toLowerCase() === "l") {
        l++;
        document.getElementById("lCount").innerText = l;
    }
});

