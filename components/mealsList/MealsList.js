import { FlatList, StyleSheet, View } from "react-native";
import MealItem from "./MealItem";



export default function MealsList({items}){
   
    function renderMealItem(itemData) {
    const { title, id, imageUrl, affordability, duration, complexity } = {
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      duration: itemData.item.duration,
      complexity: itemData.item.complexity,
      id: itemData.item.id,
    };
    return (
      <MealItem
        title={title}
        imageUrl={imageUrl}
        affordability={affordability}
        duration={duration}
        complexity={complexity}
        id={id}
      />
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
