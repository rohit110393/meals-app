import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import CategoriesScreen from "./../screens/CategoriesScreen";
import CategoryMealsScreen from "./../screens/CategoryMealsScreen";
import MealDetailScreen from "./../screens/MealDetailScreen";
import { createAppContainer } from "react-navigation";
import colors from "../constants/Colors";
import FavoritesScreen from "../screens/FavoritesScreens";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? colors.primaryColor : "white"
  },
  headerTintColor: Platform.OS === "android" ? "white" : colors.primaryColor
};
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
    defaultNavigationOptions: defaultNavigationOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        headerTitle: "Your Favorites"
      }
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions: defaultNavigationOptions
  }
);
const tabScreenConfig = {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarLabel: "Meals",
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name={"ios-restaurant"}
            size={25}
            colors={tabInfo.tintColor}
          />
        );
      }
    }
  },
  Favorites: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name={"ios-star"} size={25} colors={tabInfo.tintColor} />
        );
      }
    }
  }
};
// In this case, the navigationOptions configure the "nested navigator" (which is used as a screen) for that "parent navigator".
const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: colors.accentColor,
        shifting: false
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: colors.accentColor
        }
      });

export default createAppContainer(MealsFavTabNavigator);
