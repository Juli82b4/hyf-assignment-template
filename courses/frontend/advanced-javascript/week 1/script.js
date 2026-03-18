/*Map and filter method - Task 1*/

let numbers = [1, 2, 3, 4];

let newNumbers = numbers
  .filter(n => n % 2 !== 0)
  .map(n => n * 2);

console.log(newNumbers);

/*Working with movies - Task 3*/

// | 1 |----Short Titles----//

let shortTitles = [];
for (let i = 0; i < movies.length; i++) {
  if (movies[i].title.length <= 5) {
    shortTitles.push(movies[i].title);
  }
}
document.getElementById("short").textContent = shortTitles.join(", ");

// | 2 |---- long movie titles----//  

let longTitles = [];
for (let i = 0; i < movies.length; i++) {
  if (movies[i].title.length > 50) {
    longTitles.push(movies[i].title);
  }
}
document.getElementById("long").textContent = longTitles.join(", ");

// | 3 |---movies between 1980-1989---//

let count80s = 0;
for (let i = 0; i < movies.length; i++) {

  if (movies[i].year >= 1980 && movies[i].year <= 1989) {
    count80s++;
  }
}
document.getElementById("eighties").textContent = count80s;


//| 4 |---rated hight than 6 ---//

let ratings = [];
for (let i = 0; i < movies.length; i++) {
  if (movies[i].rating > 6) {
    ratings.push(movies[i].rating);
  }
}

// document.getElementById("ratings").textContent = ratings.join(", ");
console.log(ratings)

// | 5 |--- rated higher than 6---//

const ratingsOver6 = movies.filter(movie => movie.rating > 6)
  .map(movie => movie.rating);

console.log(ratingsOver6)


// | 6 |--- Surfer, Alien, Bejamin---//

function countMoviesByKeyword(movies) {

  let count = 0;

  for (let i = 0; i < movies.length; i++) {
    let title = movies[i].title.toLowerCase();

    if (
      title.includes("surfer") ||
      title.includes("alien") ||
      title.includes("benjamin")
    ) {
      count++;
    }
  }

  return count;
}

document.getElementById("keywords").textContent = countMoviesByKeyword(movies);

// | 7 |--- Surfer, Alien, Bejamin---//

let duplicatedMovies = [];

for (let i = 0; i < movies.length; i++) {
  let words = movies[i].title.toLowerCase().split(" ");
  let seen = [];

  for (let j = 0; j < words.length; j++) {
    if (seen.includes(words[j])) {
      duplicatedMovies.push(movies[i].title);
      break;
    } else {
      seen.push(words[j]);
    }
  }
}

console.log(duplicatedMovies);
