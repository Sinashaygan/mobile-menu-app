import { StyleSheet, Text, View } from "react-native";

export default function List({ data }) {
  return data.map((dataPoint) => (
    <View style={styles.listItem}>
      <Text key={dataPoint} style={styles.itemText}>
        {dataPoint}
      </Text>
    </View>
  ));
}

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    fontSize: 18,
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },

  itemText: {
    color: "#351401",
    textAlign: "center",
  },
});
