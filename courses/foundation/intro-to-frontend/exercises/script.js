// Favourite dishes
const favDishes = ["pizza", "kebab", "pop"]
const ul = document.querySelector("#list")
for (dish of favDishes) {
    const li = document.createElement("li");
    li.innerHTML = dish
    ul.appendChild(li)
}

// Podcast
const podcasts = [
    {
        name: "The mystery om of Johan Klausen Varbourg",
        imageUrl: "https://picsum.photos/536/354",
    },
    {
        name: "Tips about dogs with small legs",
        imageUrl: "https://picsum.photos/536/354",
    },
    {
        name: "You, me, we and us",
        imageUrl: "https://picsum.photos/536/354",
    },
    {
        name: "Breakfast news - Dinner edition",
    },
];

const podcastList = document.querySelector("#podcast")

for (podcast of podcasts) {
    const h1 = document.createElement("h1")
    const li = document.createElement("li");
    const img = document.createElement("img")

    h1.innerHTML = podcast.name

    if (podcast.imageUrl) {
        img.src = podcast.imageUrl
    }

    li.appendChild(img)

    podcastList.appendChild(h1)
    podcastList.appendChild(li)
}


// Image inserter
const imageInserter = document.querySelector("#image-inserter");

function insertImage(imageUrl, elementToAppendImageTo) {
    const imagetag = document.createElement("img")
    imagetag.src = imageUrl

    elementToAppendImageTo.appendChild(imagetag)
}

insertImage(
    "https://picsum.photos/536/354",
    imageInserter
);

// Simple event listener
const btn = document.querySelector("#btn-click-me");
btn.addEventListener("click", function (e) {
    e.target.innerHTML = "Button clicked"
});

// Light mode dark mode
const backgroundChange = document.querySelector("#btn-toggle-light-mode")
backgroundChange.addEventListener("click", function (e) {
    let bgColor = "white";
    let txtColor = "black";
    let btncolor = "black"
    let btnBgcolor = "white"

    if (document.body.style.backgroundColor == "white") {
        bgColor = "black";
        txtColor = "white";
        btncolor = "white";
        btnBgcolor = "black"
    }

    document.body.style.backgroundColor = bgColor;
    document.body.style.color = txtColor;

    e.target.style.backgroundColor = btnBgcolor;
    e.target.style.color = btncolor;
})

// Astronauts in space
async function getAtronautsData() {
    const response = await fetch("http://api.open-notify.org/astros.json");
    const data = await response.json();
    return data;
}

async function showAstronauts() {
    const result = await getAtronautsData();

    let display = "";
    let number = result.number;
    for (const astro of result.people) {
        if (!display) {
            display += `There are ${number} astronauts in space, they are:<br />`;
        }

        display += astro.name + "<br />";
    }

    document.querySelector("#astronauts").innerHTML = display;
}

showAstronauts();
