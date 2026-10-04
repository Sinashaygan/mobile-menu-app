import { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsList from "../components/MealsList/MealsList";

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

  return <MealsList/>
}
