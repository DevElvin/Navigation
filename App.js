import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealsDetails from "./screens/MealDetails";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "./screens/FavoritesScreen";
// import FavoritesContextProvider from "./store/context/favorite-context";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import MyComponent from "./components/MyComponent";
export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();
  function DrawerNavigator() {
    return (
      <>
        <Drawer.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            animation: "slide_from_right",
            sceneContainerStyle: {
              backgroundColor: "#3f2f25",
            },
            drawerActiveTintColor: "white",
            drawerInactiveTintColor: "white",
            drawerContentStyle: {
              backgroundColor: "#351401",
            },
          }}
        >
          <Drawer.Screen
            component={CategoriesScreen}
            name="Categories screen"
            options={{
              title: "All Categories",
              drawerIcon: ({ color, size }) => (
                <Ionicons name="list" size={size} color={color} />
              ),
            }}
          />
          <Drawer.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              drawerIcon: ({ color, size }) => (
                <Ionicons name="star" size={size} color={color} />
              ),
            }}
          />
        </Drawer.Navigator>
      </>
    );
  }
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              animation: "slide_from_right",
              contentStyle: {
                backgroundColor: "#3f2f25",
              },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
              // options={({ route, navigation }) => {
              //   const catId = route.params.categoryId;
              //   return { title: catId };
              // }}
            />
            <Stack.Screen name="MealsDetails" component={MealsDetails} />
          </Stack.Navigator>
        </NavigationContainer>
        <MyComponent />
      </Provider>
    </>
  );
}
