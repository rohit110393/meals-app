import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import CategoriesScreen from "./../screens/CategoriesScreen";
import CategoryMealsScreen from "./../screens/CategoryMealsScreen";
import MealDetailScreen from "./../screens/MealDetailScreen";
import { createAppContainer } from "react-navigation";
import colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreens";
const MealsNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: "Meals Categories"
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor:
          Platform.OS === "android" ? colors.primaryColor : "white"
      },
      headerTintColor: Platform.OS === "android" ? "white" : colors.primaryColor
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: MealsNavigator,
    Favorites: FavoritesScreen
  },
  {
    tabBarOptions: {
      activeTintColor: colors.accentColor
    }
  }
);

export default createAppContainer(MealsFavTabNavigator);
