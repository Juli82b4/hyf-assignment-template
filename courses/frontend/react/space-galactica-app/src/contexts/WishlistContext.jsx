import { createContext, useContext, useState } from "react";

const WishlistContext = createContext();

export const useWishlist = () => useContext(WishlistContext);

export const WishlistProvider = ({ children }) => {
  const [planetsWishlist, setPlanetsWishlist] = useState([]);

  const addPlanetToWishlist = (planet) => {
    setPlanetsWishlist(prev => [...prev, planet]);
  };

  const removePlanetFromWishlist = (name) => {
    setPlanetsWishlist(prev =>
      prev.filter((planet) => planet.name !== name)
    );
  };

  const isPlanetInWishlist = (name) => {
    return planetsWishlist.some((planet) => planet.name === name);
  };

  const wishlistCount = planetsWishlist.length;

  return (
    <WishlistContext.Provider
      value={{
        planetsWishlist,
        addPlanetToWishlist,
        removePlanetFromWishlist,
        isPlanetInWishlist,
        wishlistCount,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};