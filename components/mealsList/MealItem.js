import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Pressable,
  Text,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import MealData from "../../screens/MealsData";

export default function MealItem({
  title,
  imageUrl,
  duration,
  complexity,
  affordability,
  id,
}) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("MealsDetails", {
      mealId: id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        android_ripple={{ color: "grey" }}
        style={({ pressed }) => (pressed ? styles.containerPressed : null)}
      >
        <View>
          <Image style={styles.Image} source={{ uri: imageUrl }} />
          <Text style={styles.title}>{title}</Text>
        </View>
        <MealData
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  Image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 8,
  },
  containerPressed: {
    opacity: Platform.select({ ios: 0.5, android: 1 }),
  },
});
