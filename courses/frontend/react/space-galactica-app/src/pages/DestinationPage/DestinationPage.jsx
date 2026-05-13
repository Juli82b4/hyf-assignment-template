import { useState } from 'react';
import styles from './DestinationPage.module.css';
import { AddWishlistItem } from "./AddWishlistItem"
import { useWishlist } from "../../contexts/WishlistContext";

// Task - Week 2
// Move this to its own file
import { PlanetWishlistItem } from "./PlanetWishlistItem.jsx";
import { PlanetCard } from "./PlanetCard.jsx";

export const Destinations = () => {
  const {
    planetsWishlist,
    addPlanetToWishlist,
    removePlanetFromWishlist,
    isPlanetInWishlist,
    wishlistCount,
  } = useWishlist();

  const planetsData = [
    {
      name: "Europa",
      description:
        "Europa, one of Jupiter’s moons, is an icy world with a hidden ocean beneath its surface. This mysterious moon is a prime candidate for the search for extraterrestrial life, making it a thrilling destination for space explorers.",
      thumbnail: "/destination/image-europa.png",
    },
    {
      name: "Mars",
      description:
        "Mars, the Red Planet, is a barren yet fascinating world with vast deserts, towering volcanoes, and the deepest canyon in the solar system. As humanity’s next frontier, Mars invites us to dream of colonization and the possibilities of life beyond Earth.",
      thumbnail: "/destination/image-mars.png",
    },
    {
      name: "Moon",
      description:
        "Our closest celestial neighbor, the Moon, is a silent witness to Earth's history. With its stunning craters and desolate landscapes, the Moon offers a unique glimpse into space exploration's past and future, making it a perfect destination for lunar adventurers.",
      thumbnail: "/destination/image-moon.png",
    },
    {
      name: "Titan",
      description:
        "Titan, Saturn's largest moon, is a world of dense atmosphere and liquid methane lakes. This enigmatic moon is shrouded in a thick orange haze, concealing a landscape that is both alien and strangely familiar, beckoning explorers to uncover its secrets.",
      thumbnail: "/destination/image-titan.png",
    },
  ];

  const onAddOrRemovePlanet = (name, index) => {
    if (isPlanetInWishlist(name)) {
      removePlanetFromWishlist(name);
    } else {
      addPlanetToWishlist({
        name,
        thumbnail: planetsData[index].thumbnail,
      });
    }

    // Task - Week 2
    // Implement this function
    // If you press the "ADD PLANET" the selected planet should display "SELECTED"
    // And the counter should update, how many planets are selected (numberOfPlanets)
    console.log(`You seleceted the following planet: ${name}, with the index of ${index}`);
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>

        <section className="card">
          <h2>Wishlist</h2>

          {/* Task - Week 2 */}
          {/* Display the number Of selected planets */}
          {/* Display the "no planets" message if it is empty! */}

          {planetsWishlist.length === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>
              You have {wishlistCount} in your wishlist
            </p>
          )}

          {/* STOP! - this is for week 3!*/}
          {/* Task - Week 3 */}
          {/* Import the AddWishlistItem react component */}
          <AddWishlistItem
            onAddWishlistItem={(item) =>
              addPlanetToWishlist(item)
            }
          />

          {/* Task - Week 3 */}
          {/* Convert the list, so it is using selectedPlanets.map() to display the items  */}
          {/* Implement the "REMOVE" function */}
          {/* uncomment the following code snippet: */}

          <h3>Your current wishlist</h3>

          <div className={styles.wishlistList}>
            {planetsWishlist.map((planet) => (
              <PlanetWishlistItem
                key={planet.name}
                name={planet.name}
                thumbnail={planet.thumbnail}
                onRemove={() =>
                  removePlanetFromWishlist(planet.name)
                }
              />
            ))}
          </div>

        </section>

        <section className="card">
          <h2>Possible destinations</h2>

          {/* Task - Week 2 */}
          {/* Add all 4 planets! Europa, Moon, Mars, Titan  */}
          {/* Use the README.md file for descriptions */}
          {/* Create a <PlanetCard /> component, which accepts the following properties: */}

          {planetsData.map((planet, index) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={isPlanetInWishlist(planet.name)}
              onAddOrRemovePlanet={() =>
                onAddOrRemovePlanet(planet.name, index)
              }
            />
          ))}

        </section>
      </main>
    </div>
  );
}

export default Destinations;