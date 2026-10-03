import { useNavigation } from "@react-navigation/native";
import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

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
    navigation.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        onPress={selectMealItemHandler}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedButton,
        ]}
        android_ripple={{ color: "#ccc" }}
      >
        <View style={styles.innerContainer}>
          <View>
            <Image source={{ uri: imageUrl }} style={styles.image} />

            <Text style={styles.title}>{title}</Text>
          </View>

          <View style={styles.details}>
            <Text style={styles.detailText}>{duration}m</Text>
            <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
            <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },

  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },

  innerContainer: {
    overflow: "hidden",
    borderRadius: 8,
  },

  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
  },

  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },

  detailText: {
    marginHorizontal: 4,
    fontSize: 12,
  },

  pressedButton: {
    opacity: 0.7,
  },
});
