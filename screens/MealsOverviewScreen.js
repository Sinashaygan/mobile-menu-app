import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

export default function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(catId);
  });

  useLayoutEffect(() => {
    const category = CATEGORIES.find((category) => {
      return category.id === catId;
    });

    navigation.setOptions({
      title: category ? category.title : "Meals",

      headerStyle: {
        backgroundColor: "#351401",
      },

      headerTintColor: "white",

      headerTitleStyle: {
        fontWeight: "bold",
        // fontSize: 14,
      },

      headerTitleAlign: "center",
    });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;

    return (
      <MealItem
        title={item.title}
        imageUrl={item.imageUrl}
        affordability={item.affordability}
        complexity={item.complexity}
        duration={item.duration}
        id={item.id}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayMeals}
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
