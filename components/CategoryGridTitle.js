import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryGridTitle({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#cccccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.pressedButton,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: 150,
    margin: 16,

    borderRadius: 8,

    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,

    // پس‌زمینه سفید حذف شد
    backgroundColor: "transparent",
  },

  button: {
    flex: 1,
    borderRadius: 8,
    overflow: "hidden",
  },

  innerContainer: {
    flex: 1,
    padding: 16,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "bold",
    fontSize: 18,
  },

  pressedButton: {
    opacity: 0.7,
  },
});
