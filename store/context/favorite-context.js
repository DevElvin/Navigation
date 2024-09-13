import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavorites: (id) => {},
  removeFavorites: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favoriteMealsId, setFavoriteMealsId] = useState([]);

  function addFavorites(id) {
    setFavoriteMealsId((prevIds) => {
     return [...prevIds, id];
    });
  }
  function removeFavorites(id) {
    setFavoriteMealsId((prevIds) => {
      return prevIds.filter((mealId) => mealId !== id);
    });
  }

  const value = {
    ids: favoriteMealsId,
    addFavorites: addFavorites,
    removeFavorites: removeFavorites,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
