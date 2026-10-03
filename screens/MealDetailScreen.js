import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

export default function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {}

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "MealDetail",

      headerStyle: {
        backgroundColor: "#351401",
      },

      headerTintColor: "white",

      headerTitleStyle: {
        fontWeight: "bold",
        // fontSize: 14,
      },

      headerTitleAlign: "center",

      headerRight: () => (
        <IconButton
          icon="star"
          color="white"
          size={24}
          onPress={headerButtonPressHandler}
        />
      ),
    });
  }, [navigation]);

  if (!selectedMeal) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Meal not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.root}
      contentContainerStyle={styles.contentContainer}
    >
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />

      <Text style={styles.title}>{selectedMeal.title}</Text>

      <MealDetails
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        duration={selectedMeal.duration}
        textStyle={styles.detailStyle}
      />

      <View style={styles.listRoot}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />

          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  contentContainer: {
    paddingBottom: 32,
  },

  image: {
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

  detailStyle: {
    color: "white",
  },

  listRoot: {
    alignItems: "center",
  },

  listContainer: {
    width: "80%",
  },

  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  errorText: {
    color: "white",
    fontSize: 18,
  },
});
