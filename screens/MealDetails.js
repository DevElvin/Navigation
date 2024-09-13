import { useContext, useLayoutEffect } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealData from "./MealsData";
import Subtitle from "../components/MealDetails/Subtitle";
import List from "../components/MealDetails/List";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorite-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../Redux/favorites";
export default function MealsDetails({ navigation, route }) {
  // const { ids, removeFavorites, addFavorites } = useContext(FavoritesContext);

  const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const mealIsFavorite = favoriteMealsIds.includes(mealId);
  console.log(mealIsFavorite);
  function changeStatusFavHandler() {
    if (mealIsFavorite) {
      // removeFavorites(mealId);
      dispatch(removeFavorite({ id: mealId }));
    } else {
      // addFavorites(mealId);
      dispatch(addFavorite({ id: mealId }));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => {
        return (
          <IconButton
            onPress={changeStatusFavHandler}
            icon={mealIsFavorite ? "star" : "star-outline"}
            color="white"
          />
        );
      },
    });
  }, [mealId, navigation, changeStatusFavHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <View>
        <Image style={styles.Image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealData
          duration={selectedMeal.duration}
          affordability={selectedMeal.affordability}
          complexity={selectedMeal.complexity}
          textStyles={styles.textStyles}
        />

        <View style={styles.listOuterContainer}>
          <View style={styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients} />
            <Subtitle>Steps</Subtitle>
            <Text style={styles.title}>Prepared by Mwikali</Text>
            <List data={selectedMeal.steps} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  Image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  textStyles: {
    color: "white",
  },
  listOuterContainer: {
    flex: 1,
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
