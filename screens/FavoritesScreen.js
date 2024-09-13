import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/mealsList/MealsList";
import { useContext } from "react";
import { FavoritesContext } from "../store/context/favorite-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

export default function FavoritesScreen() {
  // const favMealsContext = useContext(FavoritesContext);
  const favoriteMealsIds=  useSelector((state) => state.favoriteMeals.ids);
  const favoriteMeals = MEALS.filter((meal) =>
    favoriteMealsIds.includes(meal.id)
  );
  if (favoriteMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.text}>You Have no favorite meals yet</Text>
      </View>
    );
  }
  return <MealsList items={favoriteMeals} />;
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'purple'
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
