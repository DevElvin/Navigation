import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridFile";


export default function CategoriesScreen({navigation}) {

function renderCategoryItem(itemData) {
  function pressHandler() {
    navigation.navigate("MealsOverview", {
      categoryId: itemData.item.id,
      
    });
  }
  return (
    <CategoryGridTile
      title={itemData.item.title}
      color={itemData.item.color}
      onPress={pressHandler}
    />
  );
}
  return (
    <>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoryItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </>
  );
}
