import { useCart } from "../../context/CartContext";
import { AddWishlistItem } from "./AddWishlistItem";
import { PlanetWishlistItem } from "./PlanetWishlistItem.jsx";
import { PlanetCard } from "./PlanetCard.jsx";
import styles from "./DestinationPage.module.css";

export const Destinations = () => {
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

  const { cart, addToCart, removeFromCart } = useCart();

  const isPlanetSelected = (name) =>
    cart.some((planet) => planet.name === name);

  const addPlanet = (planet) => addToCart(planet);

  const removePlanet = (name) => {
    const item = cart.find((p) => p.name === name);
    if (item) removeFromCart(item.id);
  };

  const onAddOrRemovePlanet = (planet) => {
    if (isPlanetSelected(planet.name)) {
      removePlanet(planet.name);
    } else {
      addPlanet(planet);
    }
  };

  return (
    <div className="fullBGpicture">
      <main className="mainContent">
        <h1>Travel destinations</h1>

        <section className="card">
          <h2>Wishlist</h2>

          {cart.length === 0 ? (
            <p>No planets in wishlist :(</p>
          ) : (
            <p>You have {cart.length} in your wishlist</p>
          )}

          <AddWishlistItem
            onAddWishlistItem={(item) => addToCart(item)}
          />

          <h3>Your current wishlist</h3>

          <div className={styles.wishlistList}>
            {cart.map((planet) => (
              <PlanetWishlistItem
                key={planet.name}
                name={planet.name}
                thumbnail={planet.thumbnail}
                onRemove={() => removePlanet(planet.name)}
              />
            ))}
          </div>
        </section>

        <section className="card">
          <h2>Possible destinations</h2>

          {planetsData.map((planet, index) => (
            <PlanetCard
              key={planet.name}
              name={planet.name}
              description={planet.description}
              thumbnail={planet.thumbnail}
              isSelected={isPlanetSelected(planet.name)}
              onAddOrRemovePlanet={() => onAddOrRemovePlanet(planet)}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default Destinations;