import { FlatList, StyleSheet, Text, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useRoute } from "@react-navigation/native";
import MealItem from "../components/mealsList/MealItem";
import { useEffect, useLayoutEffect } from "react";
import MealsList from "../components/mealsList/MealsList";

export default function MealsOverviewScreen({ route, navigation }) {
  //   const route = useRoute();

  const catId = route.params.categoryId;
  //   const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
  return <MealsList items={displayedMeals}/>

}
