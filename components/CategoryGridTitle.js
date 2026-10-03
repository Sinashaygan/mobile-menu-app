import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTitle({ title, color, onPress }) {
  return (
    <View style={styles.gritItem}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.pressedButton : null,
        ]}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gritItem: {
    flex: 1,
    margin: 16,
    height: 150,
    elevation: 4,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    overflow: Platform.OS === "ios" ? "visible" : "hidden",
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    flex: 1,
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  pressedButton: {
    opacity: 0.25,
  },
});
