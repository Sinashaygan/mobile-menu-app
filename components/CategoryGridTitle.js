import { Pressable, Text, View } from "react-native";

export default function CategoryGridTitle({title , color}) {
  return (
    <View>
        <Pressable>
            <View>
                <Text>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}
