import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            title: "All Categories",
            headerStyle: {
              backgroundColor: "#351401",
            },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#3f2f25" },
          }}
        >
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} />

          <Stack.Screen
            name="MealOverview"
            component={MealsOverviewScreen}
          />

          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
