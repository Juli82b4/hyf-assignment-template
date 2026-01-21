const nameInput = document.getElementById("nameInput");
const result = document.getElementById("result");


const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

const houseColors = {
    Gryffindor: "red",
    Hufflepuff: "goldenrod",
    Ravenclaw: "blue",
    Slytherin: "green"
};

function getHouse() {
    const name = nameInput.value;

    if (name === "") {
        result.textContent = "Please write your name!";
        return;
    }

    const randomNumber = Math.floor(Math.random() * houses.length);
    const house = houses[randomNumber];

    result.innerText = name + " belongs in " + house + "!";
    result.style.color = houseColors[house];
}

