import { StyleSheet, Text, View } from "react-native";

export default function MealData({ duration, complexity, affordability, style, textStyles }) {
  return (
    <View style={[styles.details, style]}>
      <Text style={[styles.detailItem, textStyles]}>{duration}m</Text>
      <Text style={[styles.detailItem, textStyles]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyles]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
  },
  detailItem: {
    fontSize: 12,
  },
});